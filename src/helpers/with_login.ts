import { getSession } from 'next-auth/client'
import type { Session } from 'next-auth'
import jwt from 'next-auth/jwt'

import getConfig from 'next/config'

// import type { User } from 'generated/typegraphql-prisma/models/User'
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetServerSideProps,
  NextApiRequest
} from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { logger } from './logger'

const {
  serverRuntimeConfig: {
    pages: { signInUrl }
  }
} = getConfig()

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

export const withLogin: GetServerSidePropsWithLogin =
  (callback) => async (context) => {
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
