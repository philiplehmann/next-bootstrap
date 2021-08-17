import { ArgsType, Field } from 'type-graphql'
import { VerifyEmailInput } from 'resolvers/inputs'

@ArgsType()
export class VerifyEmailArgs {
  @Field((_type) => VerifyEmailInput, {
    nullable: false
  })
  data!: VerifyEmailInput
}
