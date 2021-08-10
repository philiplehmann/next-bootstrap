import 'reflect-metadata'
import { Resolver, Query, Ctx, Info, Args } from 'type-graphql'
import { GraphQLResolveInfo } from 'graphql'
import bcrypt from 'bcrypt'
import { User } from 'generated/typegraphql-prisma/models'
import { getPrismaFromContext } from 'generated/typegraphql-prisma/helpers'
import { NoUserError, SignInError } from './errors'
import { SignInUserArgs } from './args'

import type { PrismaClient } from '@prisma/client'

@Resolver((_of) => User)
export class SignInResolver {
  @Query((_returns) => User, {
    nullable: false
  })
  async signinUser(@Ctx() ctx: any, @Info() _info: GraphQLResolveInfo, @Args() args: SignInUserArgs): Promise<User> {
    const {
      data: { password, email }
    } = args
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const user = await prisma.user.findUnique({ where: { email } })
    if (user === null) throw new NoUserError('user is not found')
    if (user.password === null) throw new SignInError('user does not have a password')

    const result = await bcrypt.compare(password, user.password)
    if (result === false) throw new SignInError('password does not match')

    return user
  }
}
