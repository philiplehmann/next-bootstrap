import { useSession } from 'next-auth/client'
import { useQuery } from '@apollo/client'
import userByEmail from 'queries/user_by_email.graphql'
import type { ApolloError } from '@apollo/client'

export const useCurrentUser = (): [ApolloError | undefined, any, boolean] => {
  const [session, sessionLoading] = useSession()
  const { loading, error, data } = useQuery(userByEmail, {
    variables: { email: session?.user?.email }
  })
  return [error, data, sessionLoading || loading]
}
