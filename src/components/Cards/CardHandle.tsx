import React from 'react'
import styled from 'styled-components'

import { useLandingPageContext } from '../../contexts/LandingPageProvider'
import { theme } from '../../utils/theme'

interface IDotProps {
  width?: string,
  height?: string,
  color?: string,
}

// TODO: if more UI elemnts proliferate, add to seperate folder
const Dot = styled.span<IDotProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: inline-block;
  margin: 0 5px;
`

interface IPropsDots {
  amount: number,
  width: string,
  height: string,
  color?: string,
}

const Dots: React.FC<IPropsDots> = ({
  amount, width, height, ...rest
}) => (
  <>
    {[...Array(amount)].map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Dot key={index} width={width} height={height} {...rest} />
    ))}
  </>
)

interface IContainerProps {
  height?: string,
  isDraggable?: boolean,
}

const Container = styled.div<IContainerProps>`
  background-color: ${theme.handleArea};
  height: ${({ height }) => height};
  border-radius: 4px 4px 0 0;
  text-align: center;
  cursor: ${({ isDraggable }) => (isDraggable ? 'grab' : null)};
`

interface ICardHandleProps {
  height?: string,
}

const CardHandle: React.FC<ICardHandleProps> = ({ height = '20px' }, ...rest: any) => {
  const [{ isDraggable }] = useLandingPageContext()
  return (
    <Container className="react-grid-handle-drag" height={height} isDraggable={isDraggable} {...rest}>
      <Dots amount={3} width="10px" height="10px" color={isDraggable ? theme.lightApproval :theme.lightAlert} />
    </Container>
  )
}

export default CardHandle
