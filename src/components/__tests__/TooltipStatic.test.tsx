import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'
import ToolTipStatic from '../TooltipStatic'

describe('Test ToolTipStatic.tsx ', () => {
  test('Can the Tooltip Render Text', () => {
    const { getByText } = render(<ToolTipStatic content="Tooltip Content">Tooltip Root</ToolTipStatic>)
    const tooltipContent = getByText('Tooltip Content')
    expect(getByText('Tooltip Root')).toBeDefined()
    expect(tooltipContent).toBeDefined()
    expect(tooltipContent).toHaveStyle('visibility: hidden')
    fireEvent.mouseEnter(tooltipContent)
    expect(tooltipContent).toHaveStyle('visibility: visible')
  })
  test('Can the Tooltip Render a div', () => {
    const { getByText } = render(
      <ToolTipStatic content={<span>Tooltip Content</span>}>Tooltip Root</ToolTipStatic>,
    )
    const tooltipContent = getByText('Tooltip Content')
    expect(getByText('Tooltip Root')).toBeDefined()
    expect(tooltipContent).toBeDefined()
    expect(tooltipContent).toHaveStyle('visibility: hidden')
    fireEvent.mouseEnter(tooltipContent)
    expect(tooltipContent).toHaveStyle('visibility: visible')
  })
})
