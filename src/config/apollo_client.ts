import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import getConfig from 'next/config'

export const createApolloClient = (token?: string): ApolloClient<NormalizedCacheObject> => {
  const {
    serverRuntimeConfig: { graphqlServer: graphqlServerBackend },
    publicRuntimeConfig: { graphqlServer: graphqlServerPublic }
  } = getConfig()
  const httpLink = createHttpLink({
    uri: typeof window === undefined ? graphqlServerBackend : graphqlServerPublic,
    credentials: 'include' // 'same-origin', 'include'
  })
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: true
  })
  return client
}
