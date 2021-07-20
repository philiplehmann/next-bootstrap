import React, { FC } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
import { ProtectedLayout } from 'components/layouts'
import { getSession } from 'next-auth/client'
import { withLogin } from 'helpers/with_login'
import type { AppProps } from 'next/app'
import type { GetServerSideProps } from 'next'
import type { User } from 'generated/typegraphql-prisma'

// export type AppWithLoginProps = AppProps & {
//   user: User
//   jwt: string
// }
//
export const getServerSideProps: GetServerSideProps = withLogin()

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {}
//   }
// }

const Home: FC<AppProps> = () => {
  return (
    <ProtectedLayout>
      {[...new Array(50)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </ProtectedLayout>
  )
}

export default Home
