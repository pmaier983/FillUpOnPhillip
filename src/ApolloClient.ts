/* eslint-disable no-console */

import {
  ApolloClient, InMemoryCache, HttpLink, ApolloLink,
} from '@apollo/client'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link: ApolloLink.from([
    httpLink,
  ]),
  cache,
})
