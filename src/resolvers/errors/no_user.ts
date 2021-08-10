import { ApolloError } from 'apollo-server-errors'

export class NoUserError extends ApolloError {
  constructor(message: string) {
    super(message, 'NO_USER')

    Object.defineProperty(this, 'name', { value: 'NoUserError' })
  }
}
