import React, { memo, useState, useMemo, useCallback, FC, ReactNode } from 'react'
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  IconButton,
  Link,
  Drawer,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Construction as ConstructionIcon,
  Create as CreateIcon
} from '@material-ui/icons'
import { useCurrentUser } from 'helpers/current_user'
import NextLink from 'next/link'
import { UserProfileMenu, RotateIcon, ScrollTop, ScrollTopButton } from 'components'

interface PublicLayoutProps {
  children: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = memo(({ children }) => {
  const [_error, user, loading] = useCurrentUser()

  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false)

  const toggleMobileDrawerHandler = useCallback(() => {
    setMobileDrawer((state) => !state)
  }, [setMobileDrawer])

  const menuEntries = useMemo(() => {
    return [
      { path: '/test1', title: 'Test 1', icon: DashboardIcon },
      { path: '/test2', title: 'Test 2', icon: ConstructionIcon },
      { path: '/test3', title: 'Test 3', icon: CreateIcon }
    ]
  }, [])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar id="back-to-top-anchor">
            <IconButton
              onClick={toggleMobileDrawerHandler}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Box justifyContent="center" sx={{ flexGrow: 1 }}>
              {menuEntries.map(({ path, title, icon: Icon }) => {
                return (
                  <NextLink href={path} passHref key={title}>
                    <Button
                      color="inherit"
                      variant="text"
                      startIcon={<Icon />}
                      sx={{ display: { xs: 'none', sm: 'inline' } }}
                    >
                      {title}
                    </Button>
                  </NextLink>
                )
              })}
            </Box>

            <Box justifyContent="flex-end">{loading && <RotateIcon />}</Box>
            <Box justifyContent="flex-end">
              {user ? (
                <UserProfileMenu />
              ) : (
                <>
                  <NextLink href="/auth/signin" passHref>
                    <Link color="inherit">Sign In</Link>
                  </NextLink>
                  &nbsp;/&nbsp;
                  <NextLink href="/auth/signup" passHref>
                    <Link color="inherit">Sign Up</Link>
                  </NextLink>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container
        sx={{
          marginTop: {
            xs: '56px',
            md: '64px'
          },
          paddingTop: (theme) => theme.spacing(2),
          height: {
            xs: 'calc(100vh - 56px)',
            md: 'calc(100vh - 64px)'
          }
        }}
      >
        {/*error && <Alert severity="error">{error.message}</Alert>*/}
        {children}
      </Container>
      <ScrollTop>
        <ScrollTopButton />
      </ScrollTop>
      <Drawer anchor="left" open={mobileDrawer} onClose={toggleMobileDrawerHandler}>
        <Box
          role="presentation"
          onClick={toggleMobileDrawerHandler}
          onKeyDown={toggleMobileDrawerHandler}
          sx={{ width: '100vw' }}
        >
          <List>
            {menuEntries.map(({ path, title, icon: Icon }) => {
              return (
                <NextLink href={path} passHref key={title}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </NextLink>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </>
  )
})
PublicLayout.displayName = 'PublicLayout'

export default PublicLayout
