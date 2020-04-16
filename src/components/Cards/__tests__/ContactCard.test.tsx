import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactCard from '../ContactCard'

const renderContactCard = () => render(<ContactCard />)

describe('Test ContactCard.tsx ', () => {
  test('Contact Card should have 3 image Links (with alt text)', () => {
    const { getAllByAltText } = renderContactCard()
    expect(getAllByAltText('Phillip', { exact: false })).toHaveLength(3)
  })
  test('Contact Card Should have one mail Link', () => {
    const { getByText } = renderContactCard()
    expect(getByText('mail').closest('a')).toHaveAttribute('href', 'mailto:pmaier983@gmail.com')
  })
  test('Github Link Should take you off-site when clicked', () => {
    const { getByAltText } = renderContactCard()
    const linkElement = getByAltText('Github', { exact: false })
    const jsdomOpen = window.open // remember the jsdom alert
    let windowsOpenedCount = 0
    window.open = (): any => { windowsOpenedCount += 1 }
    fireEvent.click(linkElement)
    expect(windowsOpenedCount).toBe(1)
    window.open = jsdomOpen
  })
  test('Linkedin Link Should take you off-site when clicked', () => {
    const { getByAltText } = renderContactCard()
    const linkElement = getByAltText('Linkedin', { exact: false })
    const jsdomOpen = window.open // remember the jsdom alert
    let windowsOpenedCount = 0
    window.open = (): any => { windowsOpenedCount += 1 }
    fireEvent.click(linkElement)
    expect(windowsOpenedCount).toBe(1)
    window.open = jsdomOpen
  })
  // TODO: test download and mail link
})
