import { getSession } from 'next-auth/client'
import { User } from 'generated/typegraphql-prisma/models/User'
import getConfig from 'next/config'

import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetServerSideProps
} from 'next'
import type { ParsedUrlQuery } from 'querystring'

const {
  serverRuntimeConfig: {
    pages: { signInUrl }
  }
} = getConfig()

export class NoSessionUserError extends Error {
  constructor() {
    super('no user in session')
  }
}

export class UserNotFoundError extends Error {
  constructor() {
    super('user not found in db')
  }
}

export type GetServerSidePropsWithLogin = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  callback: (
    content: GetServerSidePropsContext<Q>,
    user: User
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
    const session = await getSession(context)
    if (session?.user?.email === undefined || session?.user?.email === null) {
      const { res } = context
      res.writeHead(301, {
        Location: signInUrl
      })
      res.end()
      // end function, request is handeld
      throw new NoSessionUserError()
    }

    const user = new User()
    user.email = session.user.email // TODO: check user in db if (user === null) throw new UserNotFoundError()
    return await callback(context, user)
  }
