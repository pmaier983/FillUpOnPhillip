// import React from 'react'
import {
// render,
// cleanup,
// fireEvent,
// waitForElement,
// getNodeText,
} from '@testing-library/react'
// import * as fc from 'fast-check'
// import CardContainer from '../CardContainer'

// interface IDummyBoxProps {
//   width?: string,
//   height?: string
// }

// const DummyBox: React.FC<IDummyBoxProps> =
//  ({ width = '100px', height='100px' }) => <div style={{ width, height }} />

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
