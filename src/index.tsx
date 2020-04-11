import React from 'react'
import ReactDOM from 'react-dom'

import ThemeWrapper from './ThemeWrapper'
import ApolloWrapper from './ApolloWrapper'
import App from './App'

import { ThemesProvider } from './contexts'

ReactDOM.render(
  <ApolloWrapper>
    <ThemesProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ThemesProvider>
  </ApolloWrapper>,
  document.getElementById('root'),
)
