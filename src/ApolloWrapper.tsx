import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './ApolloClient'

const ApolloWrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

export default ApolloWrapper
