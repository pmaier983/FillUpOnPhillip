import React from 'react'
import {
  render,
} from '@testing-library/react'
import CardHandle from '../CardHandle'

const renderCardHandle = () => render(<CardHandle />)

describe('Test CardHandle.tsx ', () => {
  test('Card Handle Should have three dot handles', () => {
    const { getAllByTestId } = renderCardHandle()
    expect(getAllByTestId('dot')).toHaveLength(3)
  })
})
