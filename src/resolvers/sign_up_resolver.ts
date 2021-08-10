import 'reflect-metadata'
import { Resolver, Mutation, Ctx, Info, Args } from 'type-graphql'
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
import VerificationMailer from 'mailers/verification_mailer'
import { NoUserError, VerificationInvalidTokenError, SignUpError } from './errors'
import { randomToken } from 'helpers/random_token'
import { getUserFromContext } from './helpers'
import { VerifyEmailArgs } from './args'
import { logger } from 'helpers/logger'

@Resolver((_of) => User)
export class SignUpResolver {
  @Mutation((_returns) => User, {
    nullable: false
  })
  async createEncryptedUser(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateUserArgs
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any))
    const {
      data: { password }
    } = args

    if (!password) throw new SignUpError('no password provided')

    // add encrypted password
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const user = await getPrismaFromContext(ctx).user.create({
      data: {
        ...args.data,
        name: `${args.data.firstName} ${args.data.lastName}`,
        password: encryptedPassword,
        emailVerificationToken: await randomToken()
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    try {
      const verificationMailer = new VerificationMailer(user)
      await verificationMailer.send()
    } catch (error) {
      logger.error(error)
    }

    return user
  }

  @Mutation((_returns) => User, {
    nullable: false
  })
  async verifyEmail(@Ctx() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: VerifyEmailArgs): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any))
    const {
      data: { token }
    } = args

    const prisma = getPrismaFromContext(ctx)
    const user = getUserFromContext(ctx)
    if (user && user.emailVerificationToken === token) {
      return await prisma.user.update({
        data: { emailVerificationToken: null, emailVerified: new Date() },
        where: { email: user.email }
      })
    }
    if (!user) throw new NoUserError('no user found')
    throw new VerificationInvalidTokenError('token is not valid')
  }
}
