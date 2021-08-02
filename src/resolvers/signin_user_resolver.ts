import 'reflect-metadata'
import * as TypeGraphQL from 'type-graphql'
import { GraphQLResolveInfo } from 'graphql'
import bcrypt from 'bcrypt'
import { User } from 'generated/typegraphql-prisma/models'
import { getPrismaFromContext } from 'generated/typegraphql-prisma/helpers'

import type { PrismaClient } from '@prisma/client'

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SigninUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false
  })
  password!: string
}

@TypeGraphQL.ArgsType()
export class SigninUserArgs {
  @TypeGraphQL.Field((_type) => SigninUserInput, {
    nullable: false
  })
  data!: SigninUserInput
}

@TypeGraphQL.Resolver((_of) => User)
export class SigninUserResolver {
  @TypeGraphQL.Query((_returns) => User, {
    nullable: false
  })
  async signinUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: SigninUserArgs
  ): Promise<User> {
    const {
      data: { password, email }
    } = args
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const user = await prisma.user.findUnique({ where: { email } })
    if (user === null) throw new Error('user is not found')
    if (user.password === null) throw new Error('user does not have a password')

    const result = await bcrypt.compare(password, user.password)
    if (result === false) throw new Error('password does not match')

    return user
  }
}
