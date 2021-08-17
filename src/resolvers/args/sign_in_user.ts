import { ArgsType, Field } from 'type-graphql'
import { SignInUserInput } from 'resolvers/inputs'

@ArgsType()
export class SignInUserArgs {
  @Field((_type) => SignInUserInput, {
    nullable: false
  })
  data!: SignInUserInput
}
