import { ApolloError } from 'apollo-server-errors'

export class VerificationInvalidTokenError extends ApolloError {
  constructor(message: string) {
    super(message, 'VERIFICATION_INVALID_TOKEN')

    Object.defineProperty(this, 'name', { value: 'VerificationInvalidTokenError' })
  }
}
