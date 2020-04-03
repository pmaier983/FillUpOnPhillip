import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from './ApolloClient'

const AppWrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

export default AppWrapper
