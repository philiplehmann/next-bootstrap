import { runCors } from 'config/middleware/cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'config/prisma'
import bcrypt from 'bcrypt'

export class UserNotFoundError extends Error {}
export class NoPasswordAvailableError extends Error {}
export class InvalidPasswordError extends Error {}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(400).end()
  }
  await runCors(req, res)

  let user = null
  try {
    user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    })
    if (!user) throw new UserNotFoundError(`user not found: ${req.body.email}`)
    if (!user.password)
      throw new NoPasswordAvailableError(
        `no password available: ${req.body.email}`
      )

    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match)
      throw new InvalidPasswordError(
        `password does not match: ${req.body.email}`
      )
  } catch (error) {
    console.error(error)
    return res.status(404).end()
  }

  // Rest of the API logic
  res.status(200).json(user)
}
