import { SessionResolver, SignInResolver, SignUpResolver } from 'resolvers'
import type { NonEmptyArray } from 'type-graphql'

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [SessionResolver, SignInResolver, SignUpResolver]

export default resolvers
