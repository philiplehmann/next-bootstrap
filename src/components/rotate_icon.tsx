import { Loop as LoopIcon } from '@material-ui/icons'

import { keyframes } from '@emotion/react'
import { styled } from '@material-ui/system'
export const spinEvent = keyframes`
  100% { transform:rotate(360deg);
`

export const RotateIcon = styled(LoopIcon)`
  animation: ${spinEvent} 4s linear infinite;
`
