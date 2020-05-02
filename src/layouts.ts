import _ from 'lodash/fp'
import { IBreakpointLayouts } from './hooks/useGridLayouts.d'
import { getCurrentBreakpoint } from './hooks/useGridLayouts'

export const rowCountBreakpoints = {
  lg: 20, md: 20, sm: 20, xs: 20, xxs: 20,
}

export const getRowCount = () => _.get(getCurrentBreakpoint(), rowCountBreakpoints)

export const columns = {
  lg: 4, md: 4, sm: 3, xs: 2, xxs: 1,
}

export const breakpoints = {
  lg: 1200, md: 1024, sm: 768, xs: 568, xxs: 320,
}

// TODO: have hRatio
export const initialGridLayouts: IBreakpointLayouts = {
  lg: [{
    w: 1, h: 13, x: 0, y: 0, i: 'PersonalCard', minW: 1, minH: 11, static: false,
  }, {
    w: 2, h: 8, x: 2, y: 0, i: 'RepositoriesCard', minW: 1, minH: 5, static: false,
  }, {
    w: 1, h: 5, x: 1, y: 0, i: 'ContactCard', minW: 1, minH: 3, static: false,
  }, {
    w: 2, h: 9, x: 0, y: 13, i: 'WhatMattersCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 8, x: 1, y: 5, i: 'LayoutHandlerCard', minW: 1, minH: 6, static: false,
  }, {
    w: 2, h: 14, x: 2, y: 8, i: 'TechUsedCard', minW: 1, minH: 10, static: false,
  }],
  md: [{
    w: 1, h: 13, x: 0, y: 0, i: 'PersonalCard', minW: 1, minH: 10, static: false,
  }, {
    w: 2, h: 9, x: 2, y: 0, i: 'RepositoriesCard', minW: 1, minH: 5, static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'ContactCard', minW: 1, minH: 3, static: false,
  }, {
    w: 2, h: 9, x: 0, y: 13, i: 'WhatMattersCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 9, x: 1, y: 4, i: 'LayoutHandlerCard', minW: 1, minH: 6, static: false,
  }, {
    w: 2, h: 13, x: 2, y: 9, i: 'TechUsedCard', minW: 1, minH: 10, static: false,
  }],
  sm: [{
    w: 1, h: 10, x: 0, y: 0, i: 'PersonalCard', minW: 1, minH: 10, static: false,
  }, {
    w: 1, h: 9, x: 1, y: 0, i: 'RepositoriesCard', minW: 1, minH: 5, static: false,
  }, {
    w: 1, h: 3, x: 2, y: 6, i: 'ContactCard', minW: 1, minH: 3, static: false,
  }, {
    w: 1, h: 12, x: 0, y: 10, i: 'WhatMattersCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 6, x: 2, y: 0, i: 'LayoutHandlerCard', minW: 1, minH: 6, static: false,
  }, {
    w: 2, h: 13, x: 1, y: 9, i: 'TechUsedCard', minW: 1, minH: 10, static: false,
  }],
  xs: [{
    w: 1, h: 10, x: 0, y: 0, i: 'PersonalCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 8, x: 1, y: 0, i: 'RepositoriesCard', minW: 1, minH: 5, static: false,
  }, {
    w: 1, h: 3, x: 1, y: 24, i: 'ContactCard', minW: 1, minH: 3, static: false,
  }, {
    w: 1, h: 9, x: 0, y: 10, i: 'WhatMattersCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 8, x: 0, y: 19, i: 'LayoutHandlerCard', minW: 1, minH: 7, static: false,
  }, {
    w: 1, h: 16, x: 1, y: 8, i: 'TechUsedCard', minW: 1, minH: 10, static: false,
  }],
  xxs: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 8, x: 0, y: 41, i: 'RepositoriesCard', minW: 1, minH: 5, static: false,
  }, {
    w: 1, h: 3, x: 0, y: 20, i: 'ContactCard', minW: 1, minH: 3, static: false,
  }, {
    w: 1, h: 9, x: 0, y: 11, i: 'WhatMattersCard', minW: 1, minH: 9, static: false,
  }, {
    w: 1, h: 5, x: 0, y: 23, i: 'LayoutHandlerCard', minW: 1, minH: 4, static: false,
  }, {
    w: 1, h: 13, x: 0, y: 28, i: 'TechUsedCard', minW: 1, minH: 10, static: false,
  }],
}
