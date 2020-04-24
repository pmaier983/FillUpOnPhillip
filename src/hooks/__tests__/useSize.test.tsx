import React, { useRef } from 'react'
import {
  render,
} from '@testing-library/react'
import styled from 'styled-components'
import useSize from '../useSize'

const Container = styled.div`
  width: 100px;
  height: 100px;
`

const MockUseSize = () => {
  const sizeRef = useRef<HTMLDivElement>(null)
  const { width, height } = useSize(sizeRef)
  return <Container style={{ width: '100px', height: '100px' }} ref={sizeRef}>{`size: (${width}, ${height})`}</Container>
}

describe('Test useSize.tsx ', () => {
  test('Test that all the returns work', () => {
    const { getByText, rerender } = render(<MockUseSize />)
    rerender(<MockUseSize />)
    expect(getByText('size:', { exact: false })).toBeDefined()
    expect(getByText('size:', { exact: false })).toHaveStyle('width: 100px; height: 100px')
    // TODO: get this test to work
  })
})
