import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'
import ToggleButton from '../ToggleButton'

const defaultToggleButtonProps = {
  width: 100,
  height: 100,
  trueBackgroundColor: '#FFFFFF',
  falseBackgroundColor: '#000000',
  testId: 'toggle-button',
}

interface IDefaultToggleButtonPropss {
  handleToggle?: () => void,
  toggleState: boolean,
}

const DefaultToggleButton = (
  { toggleState, handleToggle = () => undefined }: IDefaultToggleButtonPropss,
) => (
  <ToggleButton
    {...defaultToggleButtonProps}
    toggleState={toggleState}
    handleToggle={handleToggle}
  />
)

const renderToggleButton = (toggleState: boolean, handleToggle = () => undefined) => render(
  <DefaultToggleButton
    toggleState={toggleState}
    handleToggle={handleToggle}
  />,
)

describe('Test ToggleButton.tsx ', () => {
  test('There Should be On and Off Text', () => {
    const { getByText } = renderToggleButton(true)
    expect(getByText('ON')).toBeDefined()
    expect(getByText('OFF')).toBeDefined()
  })
  test('The toggle button should work', () => {
    const mockToggelState = jest.fn()
    const {
      rerender, getByText, getByTestId,
    } = renderToggleButton(true, mockToggelState)
    const onButton = getByText('ON')
    const offButton = getByText('OFF')
    const buttonContainer = getByTestId(defaultToggleButtonProps.testId)
    fireEvent.click(onButton)
    expect(mockToggelState).toHaveBeenCalledTimes(1)
    expect(buttonContainer).toHaveStyle(`background-color: ${defaultToggleButtonProps.trueBackgroundColor}`)
    rerender(
      <DefaultToggleButton toggleState={false} handleToggle={mockToggelState} />,
    )
    expect(buttonContainer).toHaveStyle(`background-color: ${defaultToggleButtonProps.falseBackgroundColor}`)
    fireEvent.click(onButton)
    fireEvent.click(offButton)
    expect(mockToggelState).toHaveBeenCalledTimes(3)
  })
})
