import React from 'react'
import ReactDOM from 'react-dom'

import ApolloWrapper from './ApolloWrapper'
import App from './App'

ReactDOM.render(
  <ApolloWrapper>
        <App />
  </ApolloWrapper>,
  document.getElementById('root'),
)
