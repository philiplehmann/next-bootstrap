import 'module-alias/register'
import 'reflect-metadata'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { buildSchema } from 'type-graphql'
import { applyResolversEnhanceMap } from 'generated/typegraphql-prisma'
import resolvers from './resolvers'
import authChecker from './auth_checker'
import resolversEnhanceMap from './resolvers_enhance_map'
import apolloServerContext from './context'

const PORT = process.env.PORT || '5100'
const CORS_ORIGIN = process.env.CORS_ORIGIN || process.env.BASE_URL || 'http://localhost:5000'
const CORS_METHODS = process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE'

const corsOptions = {
  origin: CORS_ORIGIN,
  methods: CORS_METHODS,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
}

applyResolversEnhanceMap(resolversEnhanceMap)

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers,
    authChecker
  })
  const apolloServer = new ApolloServer({
    schema,
    context: apolloServerContext
  })

  await apolloServer.start()

  const app = express()
  // https://github.com/expressjs/cors#configuration-options
  app.use(cors(corsOptions))
  app.use(cookieParser())
  app.use('/graphql', apolloServer.getMiddleware({ path: '/', cors: corsOptions }))

  await new Promise((resolve) => app.listen(PORT, () => resolve(null)))
  // eslint-disable-next-line
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
  return { apolloServer, app }
}

startApolloServer()
