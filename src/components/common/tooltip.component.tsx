import React from 'react'
import ReactTooltip from 'react-tooltip'

export const TooltipComponent = () => {
  return (
      <ReactTooltip
          place="left"
          type="dark"
          effect="solid"
          multiline={true}
  />
  )
}
