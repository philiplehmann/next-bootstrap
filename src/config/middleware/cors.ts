import Cors from 'cors'
import getConfig from 'next/config'
import { runMiddleware } from './run'

import type { NextApiRequest, NextApiResponse } from 'next'

const {
  serverRuntimeConfig: { cors: corsConfig }
} = getConfig()

// Initializing the cors middleware
const corsHandler = Cors(corsConfig)

export const runCors = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  return await runMiddleware(req, res, corsHandler)
}
