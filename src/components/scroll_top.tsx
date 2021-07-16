import React, { FC, ReactNode, MouseEvent } from 'react'
import { Box, Fab, Zoom, useScrollTrigger } from '@material-ui/core'
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons'

export type ScrollTopProps = {
  children: ReactNode
  selector?: string
}

export const ScrollTopButton: FC = () => {
  return (
    <Fab color="secondary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  )
}

const ScrollTop: FC<ScrollTopProps> = ({
  children,
  selector = '#back-to-top-anchor'
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (_event: MouseEvent<HTMLElement>) => {
    const anchor = document.body.querySelector(selector)

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

export default ScrollTop
