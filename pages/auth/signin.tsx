import React, { FC, useCallback, MouseEvent, FormEvent, useState } from 'react'
import { Avatar, Alert, Button, TextField, Link, Paper, Grid, Typography } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { styled } from '@material-ui/system'
import { PublicLayout } from 'components/layouts'
import { getProviders, signOut, signIn, ClientSafeProvider, useSession } from 'next-auth/client'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { value } from 'helpers/value'

import type { AppProps } from 'next/app'
import type { GetServerSideProps } from 'next'

type AppWithProvidersProps = AppProps & {
  providers: Record<string, ClientSafeProvider> | null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}

const SpacingBox = styled('div')(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1)
}))

const CredentialsForm = () => {
  const router = useRouter()
  const [error, setError] = useState<boolean>(false)
  const onSubmitCredentials = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.target as HTMLFormElement
      if (form) {
        const email = value(form, 'email')
        const password = value(form, 'password')
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false
        })
        if (result && result.ok) {
          setError(false)
          router.push('/portal')
        } else {
          setError(true)
        }
      }
    },
    [router]
  )
  return (
    <StyledForm noValidate onSubmit={onSubmitCredentials}>
      {error && <Alert severity="error">Could not sign in, check our E-Mail or Password</Alert>}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <NextLink href="/auth/forgot_password" passHref>
            <Link variant="body2">Forgot password?</Link>
          </NextLink>
        </Grid>
        <Grid item>
          <NextLink href="/auth/signup" passHref>
            <Link variant="body2">Don&apos;t have an account? Sign Up</Link>
          </NextLink>
        </Grid>
      </Grid>
    </StyledForm>
  )
}

const AuthLogin: FC<AppWithProvidersProps> = ({ providers }) => {
  const router = useRouter()
  const [session] = useSession()
  const logoutFromPage = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      await signOut()
      router.push('/')
    },
    [signOut]
  )
  return (
    <PublicLayout>
      <Grid container component="main" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <SpacingBox>
            {session?.user ? (
              <>
                <Avatar
                  sx={{
                    margin: (theme) => theme.spacing(1),
                    backgroundColor: (theme) => theme.palette.secondary.main
                  }}
                >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {session.user.name}
                </Typography>

                <StyledForm noValidate method="GET" action="/portal">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
                  >
                    Go to Portal
                  </Button>
                </StyledForm>

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
                  onClick={logoutFromPage}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Avatar
                  sx={{
                    margin: (theme) => theme.spacing(1),
                    backgroundColor: (theme) => theme.palette.secondary.main
                  }}
                >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {providers &&
                  Object.keys(providers).map((key) => {
                    const provider = providers[key]
                    if (key === 'credentials') {
                      return <CredentialsForm key={key} />
                    }

                    return (
                      <Button
                        key={key}
                        type="button"
                        onClick={() => signIn(key, { callbackUrl: provider.callbackUrl })}
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
                      >
                        Sign in with {key}
                      </Button>
                    )
                  })}
              </>
            )}
          </SpacingBox>
        </Grid>
      </Grid>
    </PublicLayout>
  )
}

export default AuthLogin
