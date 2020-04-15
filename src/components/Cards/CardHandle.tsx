import React from 'react'
import styled from 'styled-components'

import { useLandingPageContext } from '../../contexts/LandingPageProvider'

interface IDotProps {
  width?: string,
  height?: string,
  isDraggable?: boolean,
}

// TODO: if more UI elemnts proliferate, add to seperate folder
const Dot = styled.span<IDotProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ isDraggable, theme }) => (isDraggable ? theme.lightApproval : theme.lightAlert)};
  display: inline-block;
  margin: 0 5px;
`

interface IPropsDots extends IDotProps{
  amount: number,
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
  background-color: ${({ theme }) => theme.handleArea};
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
    <Container
      className="react-grid-handle-drag"
      data-testid="card-handle"
      height={height}
      isDraggable={isDraggable}
      {...rest}
    >
      <Dots amount={3} width="10px" height="10px" isDraggable={isDraggable} />
    </Container>
  )
}

export default CardHandle
