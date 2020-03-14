/* eslint-disable no-param-reassign */
import React, { useReducer } from 'react'
import _ from 'lodash/fp'
import {
  ILayout, IBreakpointLayouts, ILayoutsState, IActions, BuildInitialStateProps,
} from './useGridLayouts.d'

import { initialGridLayouts, breakpoints } from '../layouts'
import useLocalStorage from './useLocalStorage'

export const GRID_BREAKPOINT_LAYOUTS_ACTIONS = {
  ADD_NEW: 'ADD_NEW',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
  RESET: 'RESET',
  ADD_RANDOM: 'ADD_RANDOM',
}

const getCurrentBreakpoint = (): string => (window.innerWidth ? _.flow(
  _.toPairs,
  _.find(([, breakpointWidth]) => window.innerWidth > breakpointWidth),
  _.head,
)(breakpoints) : 'lg')

const buildInitialState = (
  { initialState, setlocalLayouts }
  : BuildInitialStateProps,
): ILayoutsState => ({
  breakpointLayoutsStack: [initialState],
  setlocalLayouts,
  breakpointLayoutsStackCurrentIndex: 0,
})

const reducer = (state: ILayoutsState, action: IActions): ILayoutsState => {
  switch (action.type) {
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.ADD_NEW:
      state.breakpointLayoutsStack.push(action.payload.breakpointLayouts)
      state.breakpointLayoutsStackCurrentIndex += 1
      state.setlocalLayouts(action.payload.breakpointLayouts)
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.PREVIOUS:
      if (state.breakpointLayoutsStackCurrentIndex > 0) {
        state.breakpointLayoutsStackCurrentIndex -= 1
        state.setlocalLayouts(
          state.breakpointLayoutsStack[state.breakpointLayoutsStackCurrentIndex],
        )
        return state
      }
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.NEXT:
      if (state.breakpointLayoutsStackCurrentIndex < state.breakpointLayoutsStack.length) {
        state.breakpointLayoutsStackCurrentIndex += 1
        state.setlocalLayouts(
          state.breakpointLayoutsStack[state.breakpointLayoutsStackCurrentIndex],
        )
        return state
      }
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.RESET:
      state.breakpointLayoutsStack.push(initialGridLayouts)
      state.breakpointLayoutsStackCurrentIndex += 1
      state.setlocalLayouts(initialGridLayouts)
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.ADD_RANDOM:
      // TODO
      return state
    default:
      // eslint-disable-next-line no-console
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

type UseGridLayouts = () => [Array<ILayout>, IBreakpointLayouts, React.Dispatch<any>]

const useGridLayout: UseGridLayouts = () => {
  const [localLayouts, setlocalLayouts] = useLocalStorage('gridLayouts', initialGridLayouts)
  const [state, dispatch] = useReducer(reducer,
    { initialState: localLayouts, setlocalLayouts },
    buildInitialState)

  const breakpointLayoutsStack = _.get('breakpointLayoutsStack', state)
  const breakpointLayoutsStackCurrentIndex = _.get('breakpointLayoutsStackCurrentIndex', state)

  const currentBreakpointLayouts = breakpointLayoutsStack[breakpointLayoutsStackCurrentIndex]
  const currentLayouts = currentBreakpointLayouts[getCurrentBreakpoint()]

  return [currentLayouts, currentBreakpointLayouts, dispatch]
}

export default useGridLayout
