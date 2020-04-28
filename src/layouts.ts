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
    w: 1, h: 14, x: 0, y: 0, i: 'PersonalCard', static: false,
  }, {
    w: 2, h: 8, x: 2, y: 0, i: 'RepositoriesCard', static: false,
  }, {
    w: 1, h: 5, x: 1, y: 0, i: 'ContactCard', static: false,
  }, {
    w: 2, h: 8, x: 0, y: 14, i: 'WhatMattersCard', static: false,
  }, {
    w: 1, h: 9, x: 1, y: 5, i: 'LayoutHandlerCard', static: false,
  }, {
    w: 2, h: 14, x: 2, y: 8, i: 'TechUsedCard', static: false,
  }],
  md: [{
    w: 1, h: 13, x: 0, y: 0, i: 'PersonalCard', static: false,
  }, {
    w: 2, h: 9, x: 2, y: 13, i: 'RepositoriesCard', static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'ContactCard', static: false,
  }, {
    w: 2, h: 9, x: 0, y: 13, i: 'WhatMattersCard', static: false,
  }, {
    w: 1, h: 9, x: 1, y: 4, i: 'LayoutHandlerCard', static: false,
  }, {
    w: 2, h: 13, x: 2, y: 0, i: 'TechUsedCard', static: false,
  }],
  sm: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', static: false,
  }, {
    w: 1, h: 8, x: 1, y: 0, i: 'RepositoriesCard', static: false,
  }, {
    w: 1, h: 3, x: 0, y: 11, i: 'ContactCard', static: false,
  }, {
    w: 1, h: 8, x: 0, y: 14, i: 'WhatMattersCard', static: false,
  }, {
    w: 1, h: 8, x: 2, y: 0, i: 'LayoutHandlerCard', static: false,
  }, {
    w: 2, h: 14, x: 1, y: 8, i: 'TechUsedCard', static: false,
  }],
  xs: [{
    w: 1, h: 10, x: 0, y: 0, i: 'PersonalCard', static: false,
  }, {
    w: 1, h: 5, x: 0, y: 17, i: 'RepositoriesCard', static: false,
  }, {
    w: 1, h: 3, x: 1, y: 19, i: 'ContactCard', static: false,
  }, {
    w: 1, h: 8, x: 1, y: 0, i: 'WhatMattersCard', static: false,
  }, {
    w: 1, h: 7, x: 0, y: 10, i: 'LayoutHandlerCard', static: false,
  }, {
    w: 1, h: 11, x: 1, y: 8, i: 'TechUsedCard', static: false,
  }],
  xxs: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', static: false,
  }, {
    w: 1, h: 8, x: 0, y: 38, i: 'RepositoriesCard', static: false,
  }, {
    w: 1, h: 3, x: 0, y: 17, i: 'ContactCard', static: false,
  }, {
    w: 1, h: 6, x: 0, y: 11, i: 'WhatMattersCard', static: false,
  }, {
    w: 1, h: 5, x: 0, y: 20, i: 'LayoutHandlerCard', static: false,
  }, {
    w: 1, h: 13, x: 0, y: 25, i: 'TechUsedCard', static: false,
  }],
}
