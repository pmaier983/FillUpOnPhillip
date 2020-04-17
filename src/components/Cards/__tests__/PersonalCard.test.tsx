import React from 'react'
import {
  render,
  waitFor,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

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

const renderPersonalCard = (isHireable: boolean) => render(
  <MockedProvider mocks={isHireable ? mockIsHireable : mockIsNotHireable} addTypename={false}>
    <PersonalCard />
  </MockedProvider>,
)

describe('Test PersonalCard.tsx ', () => {
  describe('check that all the text content renders correctly', () => {
    const mockTextArray = Object.values(mockMyProfileResponseText)
    // eslint-disable-next-line array-callback-return
    mockTextArray.map((value) => {
      test(`Check that ${value} renders`, async () => {
        const { getByText } = renderPersonalCard(true)
        const text = await waitFor(() => getByText(value))
        expect(text).toBeDefined()
      })
    })
  })
  test('test isHireable: true', async () => {
    const { getByText } = renderPersonalCard(true)
    const text = await waitFor(() => getByText('Is Open to new Opportunities!'))
    expect(text).toBeDefined()
  })
  test('test isHireable: false', async () => {
    const { getByText } = renderPersonalCard(false)
    const text = await waitFor(() => getByText('Is not currently Open to new Opportunities'))
    expect(text).toBeDefined()
  })
  // TODO: test Loading and Error State
})
