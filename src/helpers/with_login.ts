import { getSession } from 'next-auth/client'
import jwt from 'next-auth/jwt'
import getConfig from 'next/config'
import { logger } from './logger'

import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import type { GetServerSidePropsContext, GetServerSidePropsResult, GetServerSideProps, NextApiRequest } from 'next'
import type { ParsedUrlQuery } from 'querystring'

const {
  serverRuntimeConfig: {
    pages: { signInUrl }
  }
} = getConfig()

export type AppWithLoginProps = AppProps & {
  session: Session
  token: string
}

export class NoTokenError extends Error {
  constructor() {
    super('no jwt token')
  }
}
export class NoSessionError extends Error {
  constructor() {
    super('no user in session')
  }
}

export type GetServerSidePropsWithLogin = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  callback?: (
    context: GetServerSidePropsContext<Q>,
    session: Session | null,
    token: string | null
  ) => Promise<GetServerSidePropsResult<P>>
) => GetServerSideProps<P, Q>

export type GetServerSidePropsWithLoginResult = <
  P2 extends { [key: string]: any } = { [key: string]: any },
  Q2 extends ParsedUrlQuery = ParsedUrlQuery
>(
  context: GetServerSidePropsContext<Q2>
) => Promise<GetServerSidePropsResult<P2>>

export const withLogin: GetServerSidePropsWithLogin = (callback) => async (context) => {
  try {
    const token =
      (await jwt.getToken({
        req: context.req as NextApiRequest,
        raw: true
      })) || null
    if (!token) throw new NoTokenError()

    const session = await getSession(context)
    if (!session?.user) throw new NoSessionError()

    let output: GetServerSidePropsResult<any> = { props: {} }
    if (typeof callback === 'function') {
      output = await callback(context, session, token)
    }
    if ('props' in output) {
      return { ...output, props: { ...output.props, session, token } }
    }
    return output
  } catch (error) {
    logger.error(error)

    return {
      redirect: {
        destination: signInUrl,
        permanent: false
      }
    }
  }
}

export const passSession: GetServerSidePropsWithLogin = (callback) => async (context) => {
  let output: GetServerSidePropsResult<any> = { props: {} }
  try {
    const token =
      (await jwt.getToken({
        req: context.req as NextApiRequest,
        raw: true
      })) || null

    const session = await getSession(context)

    if (typeof callback === 'function') {
      output = await callback(context, session, token)
    }
    if ('props' in output) {
      return { ...output, props: { ...output.props, session, token } }
    }
  } catch (error) {
    logger.error(error)
  }
  return output
}
