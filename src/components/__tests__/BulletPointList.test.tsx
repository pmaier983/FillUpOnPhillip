import React from 'react'
import _ from 'lodash/fp'
import {
  render,
  // cleanup,
} from '@testing-library/react'
// import * as fc from 'fast-check'
import BulletPointList from '../BulletPointList'

import { whatMattersTech } from '../../static/WhatMatters'

const renderBulletPointList = () => render(<BulletPointList list={whatMattersTech} />)

describe('Test BulletPointList.tsx ', () => {
  // test('The BulletPointList should be able to handle any string[]', () => {
  //   fc.assert(
  //     fc.property(
  //       fc.set(fc.asciiString(5, 10)), (stringArray) => {
  //         const { getAllByText } = render(<BulletPointList list={stringArray} />)
  //         stringArray.map(
  //           (el) => expect(_.head(getAllByText(el, { exact: false }))).toBeDefined(),
  //         )
  //       },
  //     ).beforeEach(() => {
  //       cleanup()
  //     }),
  //   )
  // })
  test('Can the BulletPointList Render a list of string', () => {
    const { getByText } = renderBulletPointList()
    // eslint-disable-next-line array-callback-return
    _.map((el) => {
      expect(getByText(el, { exact: false })).toBeDefined()
    }, whatMattersTech)
  })
})
