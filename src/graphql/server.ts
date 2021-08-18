import 'module-alias/register'
import 'reflect-metadata'

import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import config from 'config'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginUsageReporting } from 'apollo-server-core'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { logger } from 'helpers/logger'

import { buildSchema } from 'type-graphql'
// import { applyResolversEnhanceMap } from 'generated/typegraphql-prisma'
import resolvers from './resolvers'
import authChecker from './auth_checker'
// import resolversEnhanceMap from './resolvers_enhance_map'
import apolloServerContext from './context'

const PORT = config.port('5100')
const CORS_ORIGIN = config.corsOrigin
const CORS_METHODS = config.corsMethods

const corsOptions = {
  origin: CORS_ORIGIN,
  methods: CORS_METHODS,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
}

// applyResolversEnhanceMap(resolversEnhanceMap)

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers,
    authChecker
  })
  const apolloServer = new ApolloServer({
    schema,
    context: apolloServerContext,
    formatError: (err) => {
      // Don't give the specific errors to the client.
      // if (err.message.startsWith('Database Error: ')) {
      //   return new Error('Internal server error')
      // }
      // Otherwise return the original error. The error can also
      // be manipulated in other ways, as long as it's returned.
      return err
    }
  })

  await apolloServer.start()

  const app = express()
  // https://github.com/expressjs/cors#configuration-options
  app.use(cors(corsOptions))
  app.use(cookieParser())
  app.use('/graphql', apolloServer.getMiddleware({ path: '/', cors: corsOptions }))

  await new Promise((resolve) => app.listen(PORT, () => resolve(null)))
  // eslint-disable-next-line no-console
  logger.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
  return { apolloServer, app }
}

// catch errors from resolvers and dont let it kill expressjs
process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  logger.error(err)
})
startApolloServer()
