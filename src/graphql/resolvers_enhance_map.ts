import { ResolversEnhanceMap, Role } from 'generated/typegraphql-prisma'
import { Authorized } from 'type-graphql'

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    findFirstUser: [Authorized()],
    deleteUser: [Authorized(Role.ADMIN)]
  }
}

export default resolversEnhanceMap
