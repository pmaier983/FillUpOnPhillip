import React from 'react'
import {
  render,
} from '@testing-library/react'
import CardContainer from '../CardContainer'

interface IBoxProps {
  width?: string,
  height?: string
}
const innerBoxText = 'It\'s nice to exist'
const Box: React.FC<IBoxProps> = ({ width = '100px', height='100px' }) => <div data-testid="box" style={{ width, height }}>{innerBoxText}</div>

const renderCardContainer = () => render(<CardContainer><Box /></CardContainer>)

describe('Test CardContainer.tsx', () => {
  test('Has CardHandle', () => {
    const { getByTestId } = renderCardContainer()
    expect(getByTestId('card-handle')).toBeTruthy()
  })
  test('Has CardContent', () => {
    const { getByText } = renderCardContainer()
    expect(getByText(innerBoxText)).toBeTruthy()
  })
})
