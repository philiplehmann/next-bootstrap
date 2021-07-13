import { ApolloServer } from 'apollo-server-micro'
import { prisma } from 'config/prisma'
import { buildSchema } from 'type-graphql'
import { resolvers } from 'generated/typegraphql-prisma'

import type { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Context {
  prisma: PrismaClient
}

export const context: Context = {
  prisma: prisma
}

export const config = {
  api: {
    bodyParser: false
  }
}

const apolloServerPromise = new Promise<ApolloServer>(async (resolve) => {
  const schema = await buildSchema({
    resolvers
  })
  const apolloServer = new ApolloServer({ schema, context })
  await apolloServer.start()

  resolve(apolloServer)
})

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const apolloServer = await apolloServerPromise

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
