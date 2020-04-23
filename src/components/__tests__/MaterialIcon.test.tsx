import React from 'react'
import {
  render,
} from '@testing-library/react'
import MaterialIcon from '../MaterialIcon'

const renderMaterialIcon = () => render(<MaterialIcon name="accessibility" />)

describe('Test MaterialIcon.tsx ', () => {
  test('Material Icon Should Render with proper Text', () => {
    const { getByText } = renderMaterialIcon()
    expect(getByText('accessibility')).toBeDefined()
  })
})
