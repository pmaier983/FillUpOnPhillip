/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'

interface ILandingPageState {
  isDraggable: boolean,
  isResizable: boolean,
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

const initialState: ILandingPageState = {
  isDraggable: true,
  isResizable: true,
}

export const LANDING_PAGE_ACTIONS = {
  IS_DRAGGABLE: 'IS_DRAGGABLE',
  IS_RESIZABLE: 'IS_RESIZABLE',
}

type ContextProps = [{
  isDraggable: boolean,
  isResizable: boolean,
}, React.Dispatch<IAction>]

// defaultContext is only used when there is no provided above the node in the tree...
// this shouldnt ever happen
export const LandingPageContext = createContext<ContextProps>(
  [
    initialState,
    () => console.error('Place a Provider In A Parent Node to get Landing Page Context'),
  ],
)

export const useLandingPageContext = () => useContext(LandingPageContext)

const reducer = (state: ILandingPageState, action: IAction) => {
  switch (action.type) {
    case LANDING_PAGE_ACTIONS.IS_DRAGGABLE:
      return {
        ...state,
        isDraggable: action.payload ? action.payload : !state.isDraggable,
      }
    case LANDING_PAGE_ACTIONS.IS_RESIZABLE:
      return {
        ...state,
        isResizable: action.payload ? action.payload : !state.isResizable,
      }
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const LandingPageProvider: React.FC = ({ children }) => {
  const reducedState = useReducer(reducer, initialState)
  return (
    <LandingPageContext.Provider value={reducedState}>
      {children}
    </LandingPageContext.Provider>
  )
}
export default LandingPageProvider
