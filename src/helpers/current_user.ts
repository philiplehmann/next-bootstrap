import { useSession } from 'next-auth/client'
import { useQuery } from '@apollo/client'
import userByEmail from 'queries/user_by_email.graphql'
import type { ApolloError } from '@apollo/client'

export interface CurrentUser {
  createdAt: string
  email: string
  id: string
  image: string
  name: string
  updatedAt: string
}

interface CurrentUserData {
  findFirstUser: CurrentUser
}
export const useCurrentUser = (): [ApolloError | undefined, CurrentUser | undefined, boolean] => {
  const [session, sessionLoading] = useSession()
  const { loading, error, data } = useQuery<CurrentUserData>(userByEmail, {
    variables: { email: session?.user?.email }
  })
  return [error, data && data.findFirstUser, sessionLoading || loading]
}
