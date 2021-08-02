import { AuthChecker } from 'type-graphql'

import type { PrismaClient } from '@prisma/client'
import type { User } from 'generated/typegraphql-prisma'

export interface ContextType {
  prisma: PrismaClient
  user?: User
}

const authChecker: AuthChecker<ContextType> = ({ context }, roles) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
  const { user } = context
  if (!user) return false
  if (roles.length > 0) {
    return roles.every((role) => {
      return Array.isArray(user.roles) && user.roles.includes(role)
    })
  }

  return true // or false if access is denied
}

export default authChecker
