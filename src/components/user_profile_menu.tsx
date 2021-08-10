import React, { memo, useState, useCallback, FC, SyntheticEvent } from 'react'
import { IconButton, MenuItem, Menu } from '@material-ui/core'
import { AccountCircle as AccountCircleIcon, Logout as LogoutIcon } from '@material-ui/icons'
import { signOut } from 'next-auth/client'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const menuId = 'primary-search-account-menu'

const UserProfileMenu: FC = memo(({}) => {
  const router = useRouter()
  const logoutHandler = useCallback(
    async (_event: SyntheticEvent<HTMLElement>) => {
      await signOut()
      router.push('/')
    },
    [signOut]
  )
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const isMenuOpen = Boolean(anchorEl)

  const profileMenuOpenHandler = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )

  const menuCloseHandler = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={profileMenuOpenHandler}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={menuCloseHandler}
        onClick={menuCloseHandler}
        PaperProps={{
          elevation: 0
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <NextLink href="/portal" passHref>
          <MenuItem onClick={menuCloseHandler}>
            <AccountCircleIcon /> Profile
          </MenuItem>
        </NextLink>
        <MenuItem onClick={logoutHandler}>
          <LogoutIcon /> Logout
        </MenuItem>
      </Menu>
    </>
  )
})
UserProfileMenu.displayName = 'UserProfileMenu'

export default UserProfileMenu
