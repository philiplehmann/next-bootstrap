import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import getConfig from 'next/config'

export const createApolloClient = (token?: string): ApolloClient<NormalizedCacheObject> => {
  const {
    serverRuntimeConfig: { graphqlServer: graphqlServerBackend },
    publicRuntimeConfig: { graphqlServer: graphqlServerPublic }
  } = getConfig()
  const uri = typeof window === undefined ? graphqlServerBackend : graphqlServerPublic
  const httpLink = createHttpLink({
    uri,
    credentials: 'include' // 'same-origin', 'include'
  })
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })

  const client = new ApolloClient({
    link: token ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined'
  })
  return client
}
