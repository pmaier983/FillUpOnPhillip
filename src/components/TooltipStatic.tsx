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
  opacity?: number,
  maxWidth?: string,
}

interface ITooltipStaticOptions {
  opacity?: number,
  maxWidth?: string,
}

const Tooltip = styled.div<IToolTipProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.normalTooltipColor};
  text-align: center;
  white-space: nowrap;
  border-radius: ${variables.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.borderBasic};
  padding: 3px;
  opacity: ${({ opacity = 0.85 }) => opacity};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
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
        marginLeft: `-${width}px`,
      })
    case (TOOLTIP_POSITIONS_ENUM.TOP):
    default:
      return ({
        bottom: '100%',
        left: '50%',
        width: width > 0 ? `${width}px` : undefined,
        // Shift by 3 to account for padding
        marginLeft: `-${width/2 + 3}px`,
      })
  }
}

interface ITooltipStaticProps {
  content: string | React.ReactNode,
  initialState?: boolean,
  position?: TOOLTIP_POSITIONS_ENUM,
  options?: ITooltipStaticOptions,
}

const TooltipStatic: React.FC<ITooltipStaticProps> = (
  {
    children, content, initialState=false, position=TOOLTIP_POSITIONS_ENUM.TOP, options,
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
      <Tooltip
        ref={sizeRef}
        visible={toolTipVisibility}
        opacity={options?.opacity}
        maxWidth={options?.maxWidth}
        {...tooltipPosition}
      >
        {content}
      </Tooltip>
    </HoverTooltipContainer>
  )
}

export default TooltipStatic
