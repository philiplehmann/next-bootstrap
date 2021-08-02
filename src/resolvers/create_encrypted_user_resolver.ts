import 'reflect-metadata'
import * as TypeGraphQL from 'type-graphql'
import graphqlFields from 'graphql-fields'
import { CreateUserArgs } from 'generated/typegraphql-prisma/resolvers/crud/User/args'
import { User } from 'generated/typegraphql-prisma/models'
import bcrypt from 'bcrypt'
import { saltRounds } from 'config/bcrypt'
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount
} from 'generated/typegraphql-prisma/helpers'
import { GraphQLResolveInfo } from 'graphql'

@TypeGraphQL.Resolver((_of) => User)
export class CreateEncryptedUserResolver {
  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false
  })
  async createEncryptedUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any))
    const {
      data: { password }
    } = args

    if (!password) throw new Error('no password provided')

    // add encrypted password
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    args.data.password = encryptedPassword

    // add a fullname
    args.data.name = `${args.data.firstName} ${args.data.lastName}`

    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}
