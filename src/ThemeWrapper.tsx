import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemesContext } from './contexts/ThemesProvider'

const ThemeWrapper: React.FC = ({ children }) => {
  const [{ theme }] = useThemesContext()
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
