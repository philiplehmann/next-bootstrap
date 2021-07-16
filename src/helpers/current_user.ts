import { getSession } from 'next-auth/client'
import { prisma } from 'config/prisma'
import { User } from 'generated/typegraphql-prisma'
import type { NextApiRequest } from 'next'

type CurrentUserOptions = { req: NextApiRequest }

export class NoSessionUserError extends Error {
  constructor() {
    super('no user in session')
  }
}

export class UserNotFoundError extends Error {
  constructor() {
    super('user not found in db')
  }
}

export const getCurrentUser = async ({
  req
}: CurrentUserOptions): Promise<User> => {
  const session = await getSession({ req })
  if (session?.user?.email === undefined || session?.user?.email === null) {
    throw new NoSessionUserError()
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })
  if (user === null) throw new UserNotFoundError()

  return user
}
