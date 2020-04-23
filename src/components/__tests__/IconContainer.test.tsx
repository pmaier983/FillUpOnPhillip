import React from 'react'
import {
  render,
} from '@testing-library/react'
import IconContainer from '../IconContainer'
import MaterialIcon from '../MaterialIcon'

const DummyIcon = () => <div>DummyIcon</div>

const DummyImage = () => <img alt="dummy-icon" />

const DummyMaterialIcon = () => <MaterialIcon name="bookmark" />

describe('Test IconContainer.tsx ', () => {
  test('Should be able to render a child div', () => {
    const { getByText } = render(
      <IconContainer>
        <DummyIcon />
      </IconContainer>,
    )
    expect(getByText('DummyIcon')).toBeDefined()
  })
  test('Should be able to render a Image Div', () => {
    const { getByAltText } = render(
      <IconContainer>
        <DummyImage />
      </IconContainer>,
    )
    expect(getByAltText('dummy-icon')).toBeDefined()
  })
  test('Should be able to render a Material Icon', () => {
    const { getByText } = render(
      <IconContainer>
        <DummyMaterialIcon />
      </IconContainer>,
    )
    expect(getByText('bookmark')).toBeDefined()
  })
})
