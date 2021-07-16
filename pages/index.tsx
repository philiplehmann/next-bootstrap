import React, { FC } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
import { PublicLayout } from 'components/layouts'
import type { AppProps } from 'next/app'

const Home: FC<AppProps> = () => {
  return (
    <PublicLayout>
      {[...new Array(50)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </PublicLayout>
  )
}

export default Home
