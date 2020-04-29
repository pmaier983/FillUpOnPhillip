/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import React, { useReducer } from 'react'
import _ from 'lodash/fp'
import {
  ILayout, IBreakpointLayouts, ILayoutsState, IActions, BuildInitialStateProps,
} from './useGridLayouts.d'

import { initialGridLayouts, breakpoints } from '../layouts'
import useLocalStorage from './useLocalStorage'

export const GRID_BREAKPOINT_LAYOUTS_ACTIONS = {
  ADD: 'ADD',
  UNDO: 'UNDO',
  REDO: 'REDO',
  RESET: 'RESET',
  RANDOMIZE: 'RANDOMIZE',
}

export type GetCurrentBreakpointType = () => string

export const getCurrentBreakpoint: GetCurrentBreakpointType = () => (window.innerWidth ? _.flow(
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
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.ADD: {
      const breakpoint = getCurrentBreakpoint()
      if (!action.payload) {
        console.error('A Payload of the breakpointLayouts is Required to ADD')
        return state
      }
      const newBreakpointLayouts = action.payload.breakpointLayouts
      const { breakpointLayoutsStack, breakpointLayoutsStackCurrentIndex, setlocalLayouts } = state
      // don't add the same layout to the stack in succession
      if (
        _.isEqual(
          newBreakpointLayouts[breakpoint],
          state.breakpointLayoutsStack[breakpointLayoutsStackCurrentIndex][breakpoint],
        )
      ) {
        return state
      }
      const newBreakpointLayoutsStack = _.take(
        (breakpointLayoutsStackCurrentIndex+1), breakpointLayoutsStack,
      )
      newBreakpointLayoutsStack.push(newBreakpointLayouts)
      setlocalLayouts(newBreakpointLayouts)
      return {
        ...state,
        breakpointLayoutsStack: newBreakpointLayoutsStack,
        breakpointLayoutsStackCurrentIndex: (newBreakpointLayoutsStack.length -1),
      }
    }
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.UNDO:
      if (state.breakpointLayoutsStackCurrentIndex > 0) {
        state.breakpointLayoutsStackCurrentIndex -= 1
        state.setlocalLayouts(
          state.breakpointLayoutsStack[state.breakpointLayoutsStackCurrentIndex],
        )
        return state
      }
      // TODO: Error Message when this happens
      console.error('You Cannot Undo Anymore')
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.REDO:
      if (state.breakpointLayoutsStackCurrentIndex < state.breakpointLayoutsStack.length - 1) {
        state.breakpointLayoutsStackCurrentIndex += 1
        state.setlocalLayouts(
          state.breakpointLayoutsStack[state.breakpointLayoutsStackCurrentIndex],
        )
        return state
      }
      // TODO: Error Message when this happens
      console.error('You Cannot Redo Anymore')
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.RESET:
      // param reassign for speed and readability #notFunctional
      state.breakpointLayoutsStack.push(initialGridLayouts)
      state.breakpointLayoutsStackCurrentIndex = state.breakpointLayoutsStack.length - 1
      state.setlocalLayouts(initialGridLayouts)
      return state
    case GRID_BREAKPOINT_LAYOUTS_ACTIONS.RANDOMIZE:
      // TODO
      return state
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

type UseGridLayouts = () => [Array<ILayout>, IBreakpointLayouts, React.Dispatch<IActions>]

const useGridLayout: UseGridLayouts = () => {
  const [localLayouts, setlocalLayouts] = useLocalStorage({ key: 'gridLayouts', initialValue: initialGridLayouts })
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
