import React, { useState, useMemo, useCallback, useEffect, FC, ReactNode } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Construction as ConstructionIcon,
  Create as CreateIcon
} from '@material-ui/icons'
import { useCurrentUser } from 'helpers/current_user'
import { RotateIcon, UserProfileMenu, ScrollTop, ScrollTopButton } from 'components'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const drawerWidth = 240

interface ProtectedLayoutProps {
  children: ReactNode
  title: string
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children, title }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [error, user, loading] = useCurrentUser()
  const router = useRouter()
  useEffect(() => {
    if (loading) return
    if (user) return
    if (error) router.push('/auth/signin')
  }, [error, user, loading])
  // eslint-disable-next-line
  if (error) console.error(error)
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen)
  }, [setMobileOpen])

  const menuEntries = useMemo(() => {
    return [
      { path: '/portal/test1', title: 'Test 1', icon: DashboardIcon },
      { path: '/portal/test2', title: 'Test 2', icon: ConstructionIcon },
      { path: '/portal/test3', title: 'Test 3', icon: CreateIcon }
    ]
  }, [])

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuEntries.map(({ path, title, icon: Icon }) => {
          return (
            <NextLink href={path} key={title} passHref>
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </NextLink>
          )
        })}
      </List>
      <Divider />
      <List>
        {menuEntries.map(({ path, title, icon: Icon }) => {
          return (
            <NextLink href={path} key={title} passHref>
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </NextLink>
          )
        })}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box justifyContent="center" sx={{ flexGrow: 1 }}>
            {title}
          </Box>
          <Box justifyContent="flex-end">{loading && <RotateIcon />}</Box>
          <Box justifyContent="flex-end">
            <UserProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={typeof window === 'undefined' ? null : document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar id="back-to-top-anchor" />
        {children}
        <ScrollTop>
          <ScrollTopButton />
        </ScrollTop>
      </Box>
    </Box>
  )
}

export default ProtectedLayout
