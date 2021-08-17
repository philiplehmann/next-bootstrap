import { ApolloError } from 'apollo-server-errors'

export class SignUpError extends ApolloError {
  constructor(message: string) {
    super(message, 'SIGN_UP')

    Object.defineProperty(this, 'name', { value: 'SignUpError' })
  }
}
