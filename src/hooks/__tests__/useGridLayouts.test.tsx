import {
  renderHook,
  act,
} from '@testing-library/react-hooks'
import useGridLayouts, { getCurrentBreakpoint, GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../useGridLayouts'
import { initialGridLayouts } from '../../layouts'

const renderUseGridLayouts = (options?: any) => renderHook(useGridLayouts, options)

const newLayout = [{
  w: 1, h: 10, x: 0, y: 0, i: 'PersonalCard', moved: false, static: false,
}, {
  w: 1, h: 10, x: 0, y: 15, i: 'RepositoriesCard', moved: false, static: false,
}, {
  w: 1, h: 10, x: 1, y: 10, i: 'ContactCard', moved: false, static: false,
}, {
  w: 1, h: 10, x: 1, y: 4, i: 'PictureCard', moved: false, static: false,
}, {
  w: 1, h: 10, x: 1, y: 0, i: 'LayoutHandlerCard', moved: false, static: false,
},
{
  w: 1, h: 10, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
},
]

describe('Test useGridLayouts.tsx ', () => {
  test('Should Start Out with the current Grid Layouts', () => {
    const { result } = renderUseGridLayouts()
    const breakpoint = getCurrentBreakpoint()

    expect(result.current[0]).toBe(result.current[1][breakpoint])
    expect(result.current[0]).toBe(initialGridLayouts[breakpoint])
  })
  test('All the Dispatch Functions Should Work', () => {
    const { result } = renderUseGridLayouts()

    const breakpoint = getCurrentBreakpoint()
    const modifiedBreakpointLayouts = {
      breakpointLayouts:
      { ...initialGridLayouts, [breakpoint]: newLayout },
    }

    // Test ADD
    expect(result.current[2]).toBeDefined()
    act(() => {
      result.current[2](
        { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.ADD, payload: modifiedBreakpointLayouts },
      )
    })
    expect(result.current[0]).toBe(modifiedBreakpointLayouts.breakpointLayouts[breakpoint])

    // Test UNDO
    act(() => {
      result.current[2](
        { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.UNDO },
      )
    })
    expect(result.current[0]).toBe(initialGridLayouts[breakpoint])

    // Test REDO
    act(() => {
      result.current[2](
        { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.REDO },
      )
    })
    expect(result.current[0]).toBe(modifiedBreakpointLayouts.breakpointLayouts[breakpoint])

    // Test Reset
    act(() => {
      result.current[2](
        { type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.RESET },
      )
    })
    expect(result.current[0]).toBe(initialGridLayouts[breakpoint])
  })
})
