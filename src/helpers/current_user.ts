import { useQuery } from '@apollo/client'
import SessionUser from 'queries/session_user.graphql'
import type { ApolloError, ApolloQueryResult, OperationVariables } from '@apollo/client'

export interface CurrentUser {
  createdAt: string
  email: string
  id: string
  image: string
  name: string
  updatedAt: string
}

export type RefetchType = (
  variables?: Partial<OperationVariables> | undefined
) => Promise<ApolloQueryResult<SessionData>>

interface SessionData {
  currentUser?: CurrentUser
}
export const useCurrentUser = (): [ApolloError | undefined, CurrentUser | undefined, boolean, RefetchType] => {
  if (typeof window === 'undefined') {
    return [undefined, undefined, true, () => Promise.resolve({ data: {}, loading: false, networkStatus: 0 })]
  }
  const result = useQuery<SessionData>(SessionUser)
  const { error, data, loading, refetch } = result
  return [error, data?.currentUser, loading, refetch]
}
