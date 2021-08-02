import React, { FC } from 'react'
import { ProtectedLayout } from 'components/layouts'
import { withLogin } from 'helpers/with_login'
import type { AppWithLoginProps } from 'helpers/with_login'
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = withLogin()

const Test3: FC<AppWithLoginProps> = () => {
  return (
    <ProtectedLayout title="Test 3">
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

export default Test3
