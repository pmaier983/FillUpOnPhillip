import React from 'react'
import {
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import _ from 'lodash/fp'
import { MockedProvider } from '@apollo/react-testing'

import TechUsedCard from '../TechUsedCard'

import { GET_REPOSITORY } from '../../../Queries'
import { LandingPageProvider } from '../../../contexts'
import { technologyUsed } from '../../../static/TechUsed'

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

const mocksTechUsedQueries = technologyUsed.map((techUsed) => (
  {
    request: {
      query: GET_REPOSITORY,
      variables: {
        name: techUsed.name,
        owner: techUsed.owner,
      },
    },
    result: mockRepoResult,
  }))

const renderTechUsedCard = (options?: any) => render(<TechUsedCard />, options)

describe('Test TechUsedCard.tsx ', () => {
  test('Should Render the Card Title', () => {
    const { getByText } = renderTechUsedCard()
    expect(getByText('Tech Used to build this Website (Click In)')).toBeDefined()
  })
  describe('Check that all the tech used images are rendered', () => {
    // eslint-disable-next-line array-callback-return
    technologyUsed.map((tech) => {
      test(`Is the ${tech.displayName} icon rendered`, () => {
        const { getByAltText } = renderTechUsedCard()
        expect(getByAltText(tech.name)).toBeDefined()
      })
    })
  })
  // TODO: test if right arrow when focused works.
  test('Does have all buttons', () => {
    const { getByText } = renderTechUsedCard()

    // Refresh Button
    expect(getByText('refresh')).toBeDefined()

    // left arrow
    expect(getByText('chevron_left')).toBeDefined()

    // right arrow
    expect(getByText('chevron_right')).toBeDefined()
  })
  test('Do buttons work', async () => {
    const { getByText, getByTestId } = render(
      <LandingPageProvider>
        <MockedProvider mocks={mocksTechUsedQueries} addTypename={false}>
          <TechUsedCard />
        </MockedProvider>
      </LandingPageProvider>,
    )
    const rightButton = getByText('chevron_right')
    const leftButton = getByText('chevron_left')
    const refreshButton = getByText('refresh')

    await waitFor(() => {
      expect(getByTestId('tech-used-icons')).toBeDefined()
    })

    fireEvent.click(rightButton)
    await waitFor(() => {
      // TODO: find a way to hush the undefined error
      const firstTechCardDisplayName = _.getOr('TS is annoying sometimes (or I dont know how to fix this...)',
        'displayName',
        _.head(technologyUsed))
      expect(getByText(firstTechCardDisplayName)).toBeDefined()
    })

    fireEvent.click(leftButton)

    await waitFor(() => {
      expect(getByTestId('tech-used-icons')).toBeDefined()
    })

    fireEvent.click(leftButton)

    await waitFor(() => {
      // TODO: find a way to hush the undefined error
      const lastTechCardDisplayName = _.getOr('TS is annoying sometimes (or I dont know how to fix this...)',
        'displayName',
        _.last(technologyUsed))
      expect(getByText(lastTechCardDisplayName)).toBeDefined()
    })

    fireEvent.click(refreshButton)

    await waitFor(() => {
      expect(getByTestId('tech-used-icons')).toBeDefined()
    })
  })
})
