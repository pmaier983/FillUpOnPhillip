/* eslint-disable no-console */
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const getApolloClient = ({ onErrorMessage }) => {
  const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
    },
  });

  const cache = new InMemoryCache();

  return new ApolloClient({
    link: ApolloLink.from([
      onError((...errorArgs) => {
        const { graphQLErrors, networkError } = _.get(errorArgs, '0');
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) => console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ));
        }

        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }

        if (typeof onErrorMessage === 'function') {
          // You could log to a server here or anything else
          const currentTime = moment()
            .format('MM/DD/YYYY HH:mm:ss');
          if (graphQLErrors) {
            onErrorMessage(`GraphQL Server Error! ${currentTime}`);
          }
          if (networkError) {
            onErrorMessage(`GraphQL Network Error! ${currentTime}`);
          } else {
            onErrorMessage(`GraphQL Error! ${currentTime}`);
          }
        }
      }),
      httpLink,
    ]),
    cache,
  });
};

export default getApolloClient;

getApolloClient.propTypes = {
  onErrorMessage: PropTypes.func,
};
