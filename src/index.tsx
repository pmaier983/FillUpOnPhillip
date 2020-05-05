import React from 'react'
import ReactDOM from 'react-dom'

import ThemeWrapper from './ThemeWrapper'
import ApolloWrapper from './ApolloWrapper'
import App from './App'

import { ThemesProvider } from './contexts'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

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
