import { prisma } from 'config/prisma'
import { logger } from 'helpers/logger'
import jwt from 'next-auth/jwt'
import config from 'config'

import type { ContextFunction } from 'apollo-server-core'
import type { Request } from 'express'
import type { User } from 'generated/typegraphql-prisma'

const secret = config.nextAuthSecret

const apolloServerContext: ContextFunction<{ req: Request }> = async ({ req }) => {
  // Note: This example uses the `req` argument to access headers,
  // but the arguments received by `context` vary by integration.
  // This means they vary for Express, Koa, Lambda, etc.
  //
  // To find out the correct arguments for a specific integration,
  // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

  let user: User | null = null
  try {
    // const token = (req.cookies && req.cookies['next-auth.session-token']) || req.headers?.authorization?.substr(7)
    // Get the user session from the request.
    const session = await jwt.getToken({ req: req as any, secret })

    if (session === null) throw new Error('no token found cookie or header')

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

export default apolloServerContext
