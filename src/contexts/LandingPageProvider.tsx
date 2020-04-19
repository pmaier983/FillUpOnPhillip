/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'
import _ from 'lodash/fp'
import { ITechCard, technologyUsed } from '../static/TechUsed'

interface ILandingPageState {
  isDraggable: boolean,
  isResizable: boolean,
  techUsedCardIndex: number,
  techUsedRolodex: ITechCard[]
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

const initialState: ILandingPageState = {
  isDraggable: true,
  isResizable: false,
  techUsedCardIndex: 0,
  techUsedRolodex: technologyUsed,
}

export const LANDING_PAGE_ACTIONS = {
  IS_DRAGGABLE: 'IS_DRAGGABLE',
  IS_RESIZABLE: 'IS_RESIZABLE',
  UPDATE_TECH_USED_CARD_INDEX: 'UPDATE_TECH_USED_CARD_INDEX',
}

type ContextProps = [ILandingPageState, React.Dispatch<IAction>]

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
    case LANDING_PAGE_ACTIONS.UPDATE_TECH_USED_CARD_INDEX: {
      const newIndex = _.get('payload', action)
      const techRolodexLength = _.get('techUsedRolodex.length', state)
      // TODO: I'm sure there is a better pattern then this
      if (newIndex > techRolodexLength) {
        return {
          ...state,
          techUsedCardIndex: 0,
        }
      } if (newIndex < 0) {
        return {
          ...state,
          techUsedCardIndex: techRolodexLength,
        }
      }
      if (newIndex > 0 || newIndex > techRolodexLength) {
        return {
          ...state,
          techUsedCardIndex: newIndex,
        }
      }
      return {
        ...state,
        techUsedCardIndex: 0,
      }
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
