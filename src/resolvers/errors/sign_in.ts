import { ApolloError } from 'apollo-server-errors'

export class SignInError extends ApolloError {
  constructor(message: string) {
    super(message, 'SIGN_IN')

    Object.defineProperty(this, 'name', { value: 'SignInError' })
  }
}
