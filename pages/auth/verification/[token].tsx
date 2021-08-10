import React, { FC } from 'react'
import { createApolloClient } from 'config/apollo_client'
import VerifyEmail from 'queries/sign_up/verify_email.graphql'

import type { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'

export const getServerSideProps: GetServerSideProps = async ({ req, query: { token } }) => {
  if (!token) return { notFound: true }

  const authToken = (req.cookies && req.cookies['next-auth.session-token']) || req.headers?.authorization?.substr(7)
  if (authToken) {
    const client = createApolloClient(authToken)
    const res = await client.mutate({ mutation: VerifyEmail, variables: { token } })
    if (!res.data.verifyEmail.emailVerified) {
      return {
        redirect: {
          destination: '/portal',
          permanent: false
        }
      }
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

const EmailVerification: FC<AppProps> = () => {
  return <div></div>
}

export default EmailVerification
