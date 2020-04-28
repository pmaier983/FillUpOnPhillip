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
  testid: 'toggle-button',
}

interface IDefaultToggleButtonProps {
  handleToggle?: () => void,
  toggleState: boolean,
}

const DefaultToggleButton = (
  { toggleState, handleToggle = () => undefined }: IDefaultToggleButtonProps,
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
    const mockToggleState = jest.fn()
    const {
      rerender, getByText, getByTestId,
    } = renderToggleButton(true, mockToggleState)
    const onButton = getByText('ON')
    const offButton = getByText('OFF')
    const buttonContainer = getByTestId(defaultToggleButtonProps.testid)
    fireEvent.click(onButton)
    expect(mockToggleState).toHaveBeenCalledTimes(1)
    expect(buttonContainer).toHaveStyle(`background-color: ${defaultToggleButtonProps.trueBackgroundColor}`)
    rerender(
      <DefaultToggleButton toggleState={false} handleToggle={mockToggleState} />,
    )
    expect(buttonContainer).toHaveStyle(`background-color: ${defaultToggleButtonProps.falseBackgroundColor}`)
    fireEvent.click(onButton)
    fireEvent.click(offButton)
    expect(mockToggleState).toHaveBeenCalledTimes(3)
  })
})
