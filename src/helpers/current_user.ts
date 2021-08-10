import { useSession } from 'next-auth/client'
import { useQuery } from '@apollo/client'
import SessionUser from 'queries/session_user.graphql'
import type { ApolloError } from '@apollo/client'

export interface CurrentUser {
  createdAt: string
  email: string
  id: string
  image: string
  name: string
  updatedAt: string
}

interface SessionData {
  currentUser: CurrentUser
}
export const useCurrentUser = (): [ApolloError | undefined, CurrentUser | undefined, boolean] => {
  const [session, sessionLoading] = useSession()
  const { loading, error, data } = useQuery<SessionData>(SessionUser, {
    variables: { email: session?.user?.email }
  })
  return [error, data && data.currentUser, sessionLoading || loading]
}
