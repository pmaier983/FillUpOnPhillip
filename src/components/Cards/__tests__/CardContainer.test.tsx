import React from 'react'
import {
  render,
  // cleanup,
  // fireEvent,
  // waitForElement,
  // getNodeText,
} from '@testing-library/react'
// import * as fc from 'fast-check'
import CardContainer from '../CardContainer'

interface IBoxProps {
  width?: string,
  height?: string
}
const innerBoxText = 'It\'s nice to exist'
const Box: React.FC<IBoxProps> = ({ width = '100px', height='100px' }) => <div data-testid="box" style={{ width, height }}>{innerBoxText}</div>

const renderDummyCardContainer = () => render(<CardContainer><Box /></CardContainer>)

describe('Test CardContainer.tsx', () => {
  test('Has CardHandle', () => {
    const { getByTestId } = renderDummyCardContainer()
    expect(getByTestId('card-handle')).toBeTruthy()
  })
  test('Has CardContent', () => {
    const { getByText } = renderDummyCardContainer()
    expect(getByText(innerBoxText)).toBeTruthy()
  })
})
