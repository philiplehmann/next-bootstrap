// This is an example of to protect an API route
import { getCurrentUser } from 'helpers/current_user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const user = await getCurrentUser({ req })

  res.json(user)
}
