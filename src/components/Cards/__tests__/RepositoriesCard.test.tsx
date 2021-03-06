import React from 'react'
import {
  render,
  waitFor,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import { GET_PERSONAL_REPOSITORIES } from '../../../Queries'
import RepositoriesCard from '../RepositoriesCard'
import { testLoadingIcon, testErrorBoundary } from './testUtilities'

const mockPersonalRepositoriesQueryResult = {
  data: {
    user: {
      id: 'ID0',
      repositories: {
        totalCount: 2,
        totalDiskUsage: 6932,
        nodes: [{
          id: 'ID1',
          name: 'FillUpOnPhillip',
          createdAt: '2019-08-23T17:55:10Z',
          description: 'My Personal Website',
          url: 'https://github.com/pmaier983/FillUpOnPhillip',
          __typename: 'Repository',
        }, {
          id: 'ID2',
          name: 'example-apollo-global-alert',
          createdAt: '2019-12-21T01:33:40Z',
          description: 'An example of a global alert system for apollo graphql',
          url: 'https://github.com/pmaier983/example-apollo-global-alert',
          __typename: 'Repository',
        }],
        __typename: 'RepositoryConnection',
      },
      __typename: 'User',
    },
  },
}


const mockPersonalRepositories = [
  {
    request: {
      query: GET_PERSONAL_REPOSITORIES,
    },
    result: mockPersonalRepositoriesQueryResult,
  },
]

const mockError = [
  {
    request: {
      query: GET_PERSONAL_REPOSITORIES,
    },
    error: Error(),
  },
]

const renderPersonalRepositoriesCard = (mock: any, options?: any) => render(
  <MockedProvider mocks={mock} addTypename>
    <RepositoriesCard />
  </MockedProvider>,
  options,
)

describe('Test RepositoriesCard.tsx', () => {
  test('The Table should have all its components', async () => {
    const {
      getByRole,
    } = renderPersonalRepositoriesCard(mockPersonalRepositories)

    // Grid Check
    const grid = await waitFor(() => getByRole('grid'))
    expect(grid).toBeDefined()

    // Header Check
    const headers = await waitFor(() => getByRole('rowgroup'))
    expect(headers).toBeDefined()
  })
  describe('Test for all headers', () => {
    const headers = ['name', 'description']
    // eslint-disable-next-line array-callback-return
    headers.map((header: string) => {
      test(`check for header: ${header}`, async () => {
        const {
          getByText,
        } = renderPersonalRepositoriesCard(mockPersonalRepositories)
        const headerText = await waitFor(() => getByText(header))
        expect(headerText).toBeDefined()
      })
    })
  })
  describe('Test RepositoriesCard Error & Loading ', () => {
    testLoadingIcon({
      name: 'RepositoriesCard', component: <RepositoriesCard />, mock: mockPersonalRepositories,
    })
    testErrorBoundary({
      name: 'RepositoriesCard', component: <RepositoriesCard />, mockError, errorMessage: 'The Repository Card Failed',
    })
  })
})
