import type { User } from 'generated/typegraphql-prisma/models'

export const getUserFromContext = (context: any): User | null => {
  return context.user as User | null
}
