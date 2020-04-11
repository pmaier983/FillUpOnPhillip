/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'
import { THEMES, IThemes } from '../utils/theme'

interface IThemeState {
  theme: IThemes
}

const initialState: IThemeState = {
  theme: THEMES.LIGHT,
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

export const THEME_ACTIONS = {
  UPDATE_LANDING_PAGE_THEME: 'UPDATE_LANDING_PAGE_THEME',
}

type ContextProps = [IThemeState, React.Dispatch<IAction>]

export const ThemesContext = createContext<ContextProps>(
  [
    initialState,
    () => console.error('Place a Provider In A Parent Node to get a Theme'),
  ],
)

export const useThemesContext = () => useContext(ThemesContext)

const reducer = (state: IThemeState, action: IAction) => {
  switch (action.type) {
    case THEME_ACTIONS.UPDATE_LANDING_PAGE_THEME:
      return { ...state, theme: THEMES[action.payload] }
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const ThemesProvider: React.FC = ({ children }) => {
  const reducedState = useReducer(reducer, initialState)
  return (
    <ThemesContext.Provider value={reducedState}>
      {children}
    </ThemesContext.Provider>
  )
}
export default ThemesProvider
