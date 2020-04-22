import React from 'react'
import {
  render,
} from '@testing-library/react'
import LoadingIcon from '../LoadingIcon'

const renderLoadingIcon = () => render(<LoadingIcon />)

describe('Test LoadingIcon.tsx ', () => {
  test('The Loading Icon Should Render', () => {
    const { getByTestId } = renderLoadingIcon()
    expect(getByTestId('loading-icon')).toBeDefined()
  })
})
