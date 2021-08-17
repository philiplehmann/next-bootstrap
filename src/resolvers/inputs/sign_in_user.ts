import { InputType, Field } from 'type-graphql'

@InputType({
  isAbstract: true
})
export class SignInUserInput {
  @Field((_type) => String, {
    nullable: false
  })
  email!: string

  @Field((_type) => String, {
    nullable: false
  })
  password!: string
}
