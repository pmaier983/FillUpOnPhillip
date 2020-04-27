import React from 'react'
import {
  render,
  waitFor,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import moment from 'moment'
import { variables } from '../../utils/variables'

import RepositoryRolodex from '../RepositoryRolodex'
import { GET_REPOSITORY } from '../../Queries'

const mockRepoResult = {
  data: {
    repository: {
      createdAt: '2016-02-26T20:25:00Z',
      description: 'description',
      diskUsage: 238008,
      homepageUrl: 'https://homepage.com',
      updatedAt: '2020-04-19T15:52:33Z',
      url: 'https://github.com/githuburl',
    },
  },
}

const defaultRepositoryRolodexProps = {
  name: 'dummyName',
  owner: 'dummyOwner',
  displayName: 'dummyDisplayName',
  icon: 'dummyIcon',
  blurb: 'dummyBlurb',
}

const mockTechUsedQuery = [
  {
    request: {
      query: GET_REPOSITORY,
      variables: {
        name: defaultRepositoryRolodexProps.name,
        owner: defaultRepositoryRolodexProps.owner,
      },
    },
    result: mockRepoResult,
  }]

const renderRepositoryRolodex = () => render(
  <MockedProvider mocks={mockTechUsedQuery} addTypename={false}>
    <RepositoryRolodex {...defaultRepositoryRolodexProps} />
  </MockedProvider>,
)

describe('Test RepositoryRolodex.tsx ', () => {
  test('RepositoryRolodex should render all its information', async () => {
    const { getByText, getByAltText } = renderRepositoryRolodex()
    const updatedDate = mockRepoResult.data.repository.updatedAt
    const { description } = mockRepoResult.data.repository
    await waitFor(() => {
      expect(getByText(defaultRepositoryRolodexProps.displayName)).toBeDefined()
      expect(getByAltText(`The Home Page of ${defaultRepositoryRolodexProps.displayName}`)).toBeDefined()
      expect(getByText(moment(updatedDate).format(variables.specificTimeFormat))).toBeDefined()
      expect(getByText(description)).toBeDefined()
    })
  })
})
