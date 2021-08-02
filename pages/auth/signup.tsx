import React, { useCallback, useState, MouseEvent, FormEvent, FC } from 'react'
import { Alert, Avatar, Button, TextField, Link, Paper, Grid, Typography } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { styled } from '@material-ui/system'
import { PublicLayout } from 'components/layouts'
import { signOut, signIn } from 'next-auth/client'
import NextLink from 'next/link'
import { useMutation } from '@apollo/client'
import SignUpMutation from 'src/queries/sign_up.graphql'
import { value } from 'helpers/value'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'

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

const SignUpForm = () => {
  const [signUp] = useMutation(SignUpMutation)
  const [error, setError] = useState<boolean>(false)
  const router = useRouter()
  const onSubmitCredentials = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    if (form) {
      const firstName = value(form, 'firstName')
      const lastName = value(form, 'lastName')
      const email = value(form, 'email')
      const password = value(form, 'password')
      const passwordConfirm = value(form, 'passwordConfirm')
      if (password === passwordConfirm) {
        const result = await signUp({
          variables: {
            firstName,
            lastName,
            email,
            password
          }
        })
        if (result.data?.createEncryptedUser?.id) {
          setError(true)
          return
        }

        const result2 = await signIn('credentials', {
          email,
          password,
          redirect: false
        })
        if (result2?.ok) {
          router.push('/portal')
        } else {
          router.push('/signin')
        }
      }
    }
  }

  return (
    <>
      {error && <Alert severity="error">Please check your entries</Alert>}
      <StyledForm noValidate onSubmit={onSubmitCredentials}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="Fistname"
          name="firstName"
          type="text"
          autoComplete="given-name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Lastname"
          name="lastName"
          type="text"
          autoComplete="family-name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
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
          autoComplete="new-password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="passwordConfirm"
          label="Password Confirm"
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <NextLink href="/auth/forgot_password" passHref>
              <Link variant="body2">Forgot password?</Link>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink href="/auth/signin" passHref>
              <Link variant="body2">Have an account? Sign In</Link>
            </NextLink>
          </Grid>
        </Grid>
      </StyledForm>
    </>
  )
}

const AuthLogin: FC<AppProps> = ({ session }) => {
  const logoutFromPage = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      await signOut()
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
                  Sign up
                </Typography>
                <SignUpForm />
              </>
            )}
          </SpacingBox>
        </Grid>
      </Grid>
    </PublicLayout>
  )
}

export default AuthLogin
