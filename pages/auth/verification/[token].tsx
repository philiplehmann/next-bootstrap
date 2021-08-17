import React, { FC } from 'react'
import { Alert } from '@material-ui/core'
import { createApolloClient } from 'config/apollo_client'
import VerifyEmail from 'queries/sign_up/verify_email.graphql'

import type { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'
import { PublicLayout } from 'components/layouts'

interface AppPropsWithError extends AppProps {
  error?: string
}

export const getServerSideProps: GetServerSideProps = async ({ req, query: { token } }) => {
  if (!token) return { notFound: true }

  const authToken = (req.cookies && req.cookies['next-auth.session-token']) || req.headers?.authorization?.substr(7)
  if (authToken) {
    const client = createApolloClient(authToken)
    try {
      const res = await client.mutate({ mutation: VerifyEmail, variables: { token } })
      if (!res.data.verifyEmail.emailVerified) {
        return {
          redirect: {
            destination: '/portal',
            permanent: false
          }
        }
      }
    } catch (error) {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false
        }
      }
      // return {
      //   props: {
      //     error: error.message
      //   }
      // }
    }
  } else {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }

  return {
    redirect: {
      destination: '/auth/verification',
      permanent: false
    }
  }
}

const EmailVerification: FC<AppPropsWithError> = ({ error }) => {
  return <PublicLayout>{error && <Alert severity="error">{error}</Alert>}</PublicLayout>
}

export default EmailVerification
