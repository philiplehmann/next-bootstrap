import React, { FC } from 'react'
import { PublicLayout } from 'components/layouts'

import type { AppWithLoginProps } from 'helpers/with_login'

const Home: FC<AppWithLoginProps> = () => {
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
