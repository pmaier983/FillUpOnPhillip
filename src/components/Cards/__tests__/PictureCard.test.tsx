import React from 'react'
import {
  render,
} from '@testing-library/react'
import PictureCard from '../PictureCard'

const renderPictureCard = () => render(<PictureCard />)

describe('Test PictureCard.tsx ', () => {
  test('Picture Card Should Contain my Picture', () => {
    const { getAllByAltText } = renderPictureCard()
    expect(getAllByAltText('Picture of Phillip Maier', { exact: false })).toBeDefined()
  })
})
