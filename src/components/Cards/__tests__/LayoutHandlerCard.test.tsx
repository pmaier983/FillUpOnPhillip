import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'

import { ThemesProvider } from '../../../contexts'
import ThemeWrapper from '../../../ThemeWrapper'
import { THEMES } from '../../../utils/theme'
import LayoutHandlerCard from '../LayoutHandlerCard'
import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../../hooks/useGridLayouts'

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

// eslint-disable-next-line no-unused-vars
const mockedLayoutEffect = jest.fn((payload: IAction) => undefined)

const renderLayoutHandlerCard = () => render(
  <LayoutHandlerCard dispatchLayoutEffect={mockedLayoutEffect} />,
)

const renderLayoutHandlerCardWithTheme = () => render(
  <ThemesProvider>
    <ThemeWrapper>
      <LayoutHandlerCard dispatchLayoutEffect={mockedLayoutEffect} />
    </ThemeWrapper>
  </ThemesProvider>,
)

describe('Test LayoutHandlerCard.tsx ', () => {
  test('Layout Handler component Should have a Title', () => {
    const { getByText } = renderLayoutHandlerCard()
    expect(getByText('Layout Management Interface')).toBeDefined()
  })
  test('Do all the buttons Exist', () => {
    const { getByTestId } = renderLayoutHandlerCard()
    expect(getByTestId('toggle-draggability')).toBeDefined()
    expect(getByTestId('toggle-resizability')).toBeDefined()
    expect(getByTestId('toggle-theme')).toBeDefined()
  })
  test('Do all the buttons Exist', () => {
    const { getByText } = renderLayoutHandlerCard()
    const arrowBack = getByText('arrow_back')
    const arrowForward = getByText('arrow_forward')
    const reset = getByText('refresh')
    expect(arrowBack).toBeDefined()
    fireEvent.click(arrowBack)
    fireEvent.click(arrowForward)
    fireEvent.click(reset)
    expect(mockedLayoutEffect).toHaveBeenNthCalledWith(
      1,
      { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.UNDO },
    )
    expect(mockedLayoutEffect).toHaveBeenNthCalledWith(
      2,
      { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.REDO },
    )
    expect(mockedLayoutEffect).toHaveBeenNthCalledWith(
      3,
      { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.RESET },
    )
  })
  test('theme change', () => {
    const { getByText, getByTestId } = renderLayoutHandlerCardWithTheme()
    const sunnyButton = getByText('wb_sunny')
    expect(sunnyButton).toBeDefined()
    expect(getByTestId('toggle-theme')).toHaveStyle(`border: 1px solid ${THEMES.LIGHT.borderBasic}`)
    fireEvent.click(sunnyButton)
    expect(getByText('nights_stay')).toBeDefined()
    expect(getByTestId('toggle-theme')).toHaveStyle(`border: 1px solid ${THEMES.DARK.borderBasic}`)
  })
})
