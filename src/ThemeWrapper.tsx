import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeContext } from './contexts/ThemesProvider'

const ThemeWrapper: React.FC = ({ children }) => {
  const [{ theme }] = useThemeContext()
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
