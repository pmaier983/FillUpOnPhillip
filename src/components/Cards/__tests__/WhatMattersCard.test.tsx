import React from 'react'
import _ from 'lodash/fp'
import {
  render,
} from '@testing-library/react'
import WhatMattersCard from '../WhatMattersCard'

import { whatMattersTech, whatMattersPersonal } from '../../../static/WhatMatters'

const renderWhatMattersCard = () => render(<WhatMattersCard />)

const consoleError = console.error
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = () => {}
})

afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = consoleError
})

describe('Test WhatMattersCard.tsx ', () => {
  test('Picture Card Should Contain my Picture', () => {
    const { getByText } = renderWhatMattersCard()

    // Check for Card Title
    expect(getByText('Some of What Matters To Me:')).toBeDefined()

    // Check for Section Header Tech
    expect(getByText('Tech:')).toBeDefined()

    // eslint-disable-next-line array-callback-return
    _.map((el) => {
      expect(getByText(el, { exact: false })).toBeDefined()
    }, whatMattersTech)

    // Check for Section Header Personal
    expect(getByText('Personal:')).toBeDefined()

    // eslint-disable-next-line array-callback-return
    _.map((el) => {
      expect(getByText(el, { exact: false })).toBeDefined()
    }, whatMattersPersonal)
  })
})
