import 'reflect-metadata'
import { Resolver, Query, Ctx, Info } from 'type-graphql'
import { GraphQLResolveInfo } from 'graphql'
import { User } from 'generated/typegraphql-prisma/models'
import { NoUserError } from './errors'

import { getUserFromContext, queryLogger } from './helpers'

@Resolver((_of) => User)
export class SessionResolver {
  @Query((_returns) => User, {
    nullable: false
  })
  @queryLogger()
  async currentUser(@Ctx() ctx: any, @Info() _info: GraphQLResolveInfo): Promise<User> {
    const user = getUserFromContext(ctx)
    if (user === null) throw new NoUserError('user is not found')

    return user
  }
}
