import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import { useSize } from '../hooks'
import { variables } from '../utils/variables'

export enum TOOLTIP_POSITIONS_ENUM {
  BOTTOM = 'BOTTOM',
  TOP = 'TOP',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP_LEFT = 'TOP_LEFT'
}

const HoverTooltipContainer = styled.div`
  position: relative;
  flex-direction: column;
`

interface IToolTipProps {
  visible: boolean,
  width?: string,
  bottom?: string,
  left?: string,
  marginLeft?: string,
}

const Tooltip = styled.div<IToolTipProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.normalTooltipColor};
  text-align: center;
  white-space: nowrap;
  border-radius: ${variables.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.borderBasic};
  padding: 3px;
  opacity: 0.85;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`

const handleTooltipPositioning = (width: number, position: string) => {
  switch (position) {
    // TODO: build a bottom/left/right tooltip
    case (TOOLTIP_POSITIONS_ENUM.TOP_LEFT):
      return ({
        bottom: '100%',
        left: '50%',
        width: width > 0 ? `${width}px` : undefined,
        // TODO: a better way of handling 3px padding
        marginLeft: `-${width - 3}px`,
      })
    case (TOOLTIP_POSITIONS_ENUM.TOP):
    default:
      return ({
        bottom: '100%',
        left: '50%',
        width: width > 0 ? `${width}px` : undefined,
        marginLeft: `-${width/2}px`,
      })
  }
}

interface ITooltipStaticProps {
  content: string | React.FC,
  initialState?: boolean,
  position?: TOOLTIP_POSITIONS_ENUM,
}

const TooltipStatic: React.FC<ITooltipStaticProps> = (
  {
    children, content, initialState=false, position=TOOLTIP_POSITIONS_ENUM.TOP,
  },
) => {
  const [toolTipVisibility, setTooltipVisibility] = useState(initialState)
  const sizeRef = useRef<HTMLDivElement>(null)
  const { width } = useSize(sizeRef)

  const showTooltip = () => {
    setTooltipVisibility(true)
  }

  const hideTooltip = () => {
    setTooltipVisibility(false)
  }

  const tooltipPosition = handleTooltipPositioning(width, position)

  return (
    <HoverTooltipContainer
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <Tooltip ref={sizeRef} visible={toolTipVisibility} {...tooltipPosition}>{content}</Tooltip>
    </HoverTooltipContainer>
  )
}

export default TooltipStatic
