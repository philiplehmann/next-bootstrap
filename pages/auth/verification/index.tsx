import React, { FC } from 'react'
import { Avatar, Paper, Grid, Typography } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { styled } from '@material-ui/system'
import { PublicLayout } from 'components/layouts'

import { withLogin } from 'helpers/with_login'
import type { GetServerSideProps } from 'next'
import type { AppWithLoginProps } from 'helpers/with_login'

export const getServerSideProps: GetServerSideProps = withLogin()

const SpacingBox = styled('div')(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

const EmailVerification: FC<AppWithLoginProps> = () => {
  return (
    <PublicLayout>
      <Grid container component="main" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <SpacingBox>
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
                E-Mail Verification
              </Typography>
              <Typography component="p">
                You received an E-Mail with a Link and Token to activate your account with.
              </Typography>
            </>
          </SpacingBox>
        </Grid>
      </Grid>
    </PublicLayout>
  )
}

export default EmailVerification
