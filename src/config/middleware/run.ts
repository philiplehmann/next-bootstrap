import { NextApiRequest, NextApiResponse } from 'next'

type CallbackFNType = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: (result: any) => void
) => void

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: CallbackFNType
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
