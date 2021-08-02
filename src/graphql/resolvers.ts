import { FindFirstUserResolver } from 'generated/typegraphql-prisma'
import { CreateEncryptedUserResolver, SigninUserResolver } from 'resolvers'
import { NonEmptyArray } from 'type-graphql'

const resolvers: NonEmptyArray<Function> = [FindFirstUserResolver, CreateEncryptedUserResolver, SigninUserResolver]

export default resolvers
