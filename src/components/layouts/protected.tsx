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

import type SvgIcon from '@material-ui/core/SvgIcon'

const drawerWidth = 240
const smallDrawerWidth = 56

interface ProtectedLayoutProps {
  children: ReactNode
  title: string
}

interface MenuEntry {
  path: string
  title: string
  icon: typeof SvgIcon
}

interface ProtectedDrawerProps {
  menuEntries: MenuEntry[]
}

const ProtectedDrawer: FC<ProtectedDrawerProps> = ({ menuEntries }) => {
  return (
    <>
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
    </>
  )
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

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="nav" sx={{ width: { sm: smallDrawerWidth, md: drawerWidth }, flexShrink: { sm: 0 } }}>
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
              width: { sm: smallDrawerWidth, md: drawerWidth }
            }
          }}
        >
          <ProtectedDrawer menuEntries={menuEntries} />
        </Drawer>
        <Drawer
          variant="permanent"
          elevation={0}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              overflowX: 'hidden',
              width: { sm: smallDrawerWidth, md: drawerWidth }
            }
          }}
          open
        >
          <Toolbar />
          <ProtectedDrawer menuEntries={menuEntries} />
        </Drawer>
      </Box>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1200,
          width: { sm: `100%` },
          paddingLeft: { sm: `${smallDrawerWidth}px`, md: `${drawerWidth}px` }
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
