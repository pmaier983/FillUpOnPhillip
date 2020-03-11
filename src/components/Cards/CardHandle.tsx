import React from 'react'
import styled from 'styled-components'
import { theme } from '../../utils/theme'

interface IDotProps {
  width?: string,
  height?: string
}

// TODO: if more UI elemnts proliferate, add to seperate folder
const Dot = styled.span<IDotProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background: ${theme.lightAlert};
  display: inline-block;
  margin: 0 5px;
`

interface IPropsDots {
  amount: number,
  width: string,
  height: string
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
  height?: string
}

const Container = styled.div<IContainerProps>`
  background-color: ${theme.handleArea};
  height: ${({ height }) => height};
  border-radius: 4px 4px 0 0;
  text-align: center;
  cursor: grab;
`

interface ICardHandleProps {
  height?: string
}

const CardHandle: React.FC<ICardHandleProps> = ({ height = '20px' }, ...rest: any) => (
  <Container className="react-grid-handle-drag" height={height} {...rest}>
    <Dots amount={3} width="10px" height="10px" />
  </Container>
)

export default CardHandle
