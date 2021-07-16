import 'reflect-metadata'
import React, { FC } from 'react'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import theme from 'src/theme'

import { apolloClient } from 'src/config'
import { ApolloProvider } from '@apollo/client'

import type { AppProps } from 'next/app'

const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0
      }}
      session={pageProps.session}
    >
      <CacheProvider value={cache}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </CacheProvider>
    </NextAuthProvider>
  )
}
export default App
