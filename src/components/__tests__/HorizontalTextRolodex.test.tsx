import React from 'react'
import {
  render,
} from '@testing-library/react'
import HorizontalTextRolodex from '../HorizontalTextRolodex'

const dummyTextCards = [
  {
    name: 'dummyName',
    owner: 'dummyOwner',
    displayName: 'dummyDisplayName',
    icon: 'dummyIcon',
    blurb: 'dummyBlurb',
  },
]

const defaultHorizontalTextRolodexProps = {
  title: 'Dummy Title',
  textCards: dummyTextCards,
  textCardIndex: 0,
  // eslint-disable-next-line no-unused-vars
  setTextCardIndex: (payload: number) => undefined,
}

const renderHorizontalTextRolodex = () => render(
  <HorizontalTextRolodex {...defaultHorizontalTextRolodexProps} />,
)

describe('Test HorizontalTextRolodex.tsx ', () => {
  // The HorizontalTextRolodex Mechanics Are Tested in the Tech Used Card
  test('The HorizontalTextRolodex should have its title and navigation', () => {
    const { getByText } = renderHorizontalTextRolodex()
    expect(getByText('Dummy Title')).toBeDefined()
    expect(getByText('refresh')).toBeDefined()
    expect(getByText('chevron_left')).toBeDefined()
    expect(getByText('chevron_right')).toBeDefined()
  })
})
