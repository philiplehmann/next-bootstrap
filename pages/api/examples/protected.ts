// This is an example of to protect an API route
import { getCurrentUser } from 'helpers/current_user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const user = await getCurrentUser({ req })

  if (user !== undefined) {
    res.send({
      content:
        'This is protected content. You can access this content because you are signed in.'
    })
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.'
    })
  }
}
