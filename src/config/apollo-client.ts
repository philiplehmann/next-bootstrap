import { ApolloClient, InMemoryCache } from '@apollo/client'
import getConfig from 'next/config'

const {
  serverRuntimeConfig: { baseUrl }
} = getConfig()
const client = new ApolloClient({
  uri: `${baseUrl}/api/graphql`,
  cache: new InMemoryCache()
})

export default client
