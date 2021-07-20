import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { prisma } from 'config/prisma'
import { buildSchema } from 'type-graphql'
import {
  FindFirstUserResolver,
  applyResolversEnhanceMap,
  ResolversEnhanceMap,
  Role,
  User
} from 'generated/typegraphql-prisma'
import { runCors } from 'config/middleware'
import { Authorized, AuthChecker } from 'type-graphql'
import { logger } from 'helpers/logger'
import jwt from 'next-auth/jwt'

import type { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface ContextType {
  prisma: PrismaClient
  user?: User
}

export const config = {
  api: {
    bodyParser: false
  }
}

const secret = process.env.NEXTAUTH_SECRET || ''

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    findFirstUser: [Authorized()],
    deleteUser: [Authorized(Role.ADMIN)]
  }
}

applyResolversEnhanceMap(resolversEnhanceMap)

export const customAuthChecker: AuthChecker<ContextType> = (
  { context },
  roles
) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
  const { user } = context
  if (!user) return false
  if (roles.length > 0) {
    return roles.every((role) => {
      return Array.isArray(user.roles) && user.roles.includes(role)
    })
  }

  return true // or false if access is denied
}

const apolloServerPromise = new Promise<ApolloServer>(async (resolve) => {
  const schema = await buildSchema({
    resolvers: [FindFirstUserResolver],
    authChecker: customAuthChecker
  })
  const apolloServer = new ApolloServer({
    schema,
    context: async ({ req }) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

      let user: User | null = null
      try {
        // Get the user token from the headers.
        const token = req.headers?.authorization?.substr(7)
        const session = await jwt.decode({
          token,
          secret
        })

        // Try to retrieve a user with the token
        if (session?.email) {
          user = await prisma.user.findUnique({
            where: {
              email: session?.email
            }
          })
        }
      } catch (error) {
        logger.error(error)
      }

      // Add the user to the context
      return { user, prisma }
    }
  })
  await apolloServer.start()

  resolve(apolloServer)
})

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const apolloServer = await apolloServerPromise
  await runCors(req, res)
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
