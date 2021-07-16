import { PrismaClient } from '@prisma/client'
import { logger } from 'helpers/logger'

export type QueryEvent = {
  timestamp: Date
  query: string // Query sent to the database
  params: string // Query parameters
  duration: number // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query'
    },
    {
      emit: 'event',
      level: 'error'
    },
    {
      emit: 'event',
      level: 'info'
    },
    {
      emit: 'event',
      level: 'warn'
    }
  ]
})
prisma.$on('query', (event: QueryEvent) => {
  logger.info(`Query: ${event.query}`)
  logger.info(`Duration: ${event.duration}ms`)
})

prisma.$on('warn', (event: LogEvent) => {
  logger.warn(event)
})

prisma.$on('info', (event: LogEvent) => {
  logger.info(event)
})

prisma.$on('error', (event: LogEvent) => {
  logger.error(event)
})
