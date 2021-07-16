import { PrismaClient } from '@prisma/client'

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
  // eslint-disable-next-line
  console.info(`Query: ${event.query}`)
  // eslint-disable-next-line
  console.info(`Duration: ${event.duration}ms`)
})

prisma.$on('warn', (event: LogEvent) => {
  // eslint-disable-next-line
  console.warn(event)
})

prisma.$on('info', (event: LogEvent) => {
  // eslint-disable-next-line
  console.info(event)
})

prisma.$on('error', (event: LogEvent) => {
  // eslint-disable-next-line
  console.error(event)
})
