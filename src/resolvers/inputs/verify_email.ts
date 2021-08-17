import { InputType, Field } from 'type-graphql'

@InputType({
  isAbstract: true
})
export class VerifyEmailInput {
  @Field((_type) => String, {
    nullable: false
  })
  token: string | undefined
}
