import React from 'react'
import {
  render,
  waitFor,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { testErrorBoundry, testLoadingIcon } from './testUtilities'

import { MY_PROFILE } from '../../../Queries'
import PersonalCard from '../PersonalCard'

const mockMyProfileResponseText = {
  name: 'Phillip ED Maier',
  bio: 'On a mission to learn and build as much as possible.',
  location: 'Boston (for now)',
  email: 'pmaier983@gmail.com',
}

const mockIsHireable = [
  {
    request: {
      query: MY_PROFILE,
      variables: {
        userName: 'pmaier983',
      },
    },
    result: {
      data: {
        user: {
          id: 'MDQ6VXNlcjM1ODExMTg2',
          avatarUrl: 'https://avatars2.githubusercontent.com/u/35811186?v=4',
          isHireable: true,
          ...mockMyProfileResponseText,
        },
      },
    },
  },
]

const mockIsNotHireable = [
  {
    request: {
      query: MY_PROFILE,
      variables: {
        userName: 'pmaier983',
      },
    },
    result: {
      data: {
        user: {
          id: 'MDQ6VXNlcjM1ODExMTg2',
          avatarUrl: 'https://avatars2.githubusercontent.com/u/35811186?v=4',
          isHireable: false,
          ...mockMyProfileResponseText,
        },
      },
    },
  },
]

const mockError = [
  {
    request: {
      query: MY_PROFILE,
      variables: {
        userName: 'pmaier983',
      },
    },
    error: Error(),
  },
]

const renderPersonalCard = (mock: any, options?: any) => render(
  <MockedProvider mocks={mock} addTypename={false}>
    <PersonalCard />
  </MockedProvider>,
  options,
)

describe('Test PersonalCard.tsx', () => {
  describe('check that all the text content renders correctly', () => {
    const mockTextArray = Object.values(mockMyProfileResponseText)
    // eslint-disable-next-line array-callback-return
    mockTextArray.map((value) => {
      test(`Check that ${value} renders`, async () => {
        const { getByText } = renderPersonalCard(mockIsHireable)
        const text = await waitFor(() => getByText(value))
        expect(text).toBeDefined()
      })
    })
  })
  test('test isHireable: true', async () => {
    const { getByText } = renderPersonalCard(mockIsHireable)
    const text = await waitFor(() => getByText('Is Open to new Opportunities!'))
    expect(text).toBeDefined()
  })
  test('test isHireable: false', async () => {
    const { getByText } = renderPersonalCard(mockIsNotHireable)
    const text = await waitFor(() => getByText('Is not currently Open to new Opportunities'))
    expect(text).toBeDefined()
  })
  describe('Test PersonalCard Error & Loading ', () => {
    testLoadingIcon({
      name: 'PersonalCard', component: <PersonalCard />, mock: mockIsHireable,
    })
    testErrorBoundry({
      name: 'PersonalCard', component: <PersonalCard />, mockError, errorMessage: 'The Personal Card Failed',
    })
  })
})
