import { IBreakpointLayouts } from './hooks/useGridLayouts.d'

export const columns = {
  lg: 4, md: 4, sm: 3, xs: 2, xxs: 2,
}

export const breakpoints = {
  lg: 1200, md: 1024, sm: 768, xs: 568, xxs: 320,
}

// TODO make an array for the i
export const initialGridLayouts: IBreakpointLayouts = {
  lg: [{
    w: 1, h: 15, x: 0, y: 0, i: 'PersonalCard', moved: false, static: false,
  }, {
    w: 2, h: 9, x: 0, y: 15, i: 'RepositoriesCard', moved: false, static: false,
  }, {
    w: 1, h: 5, x: 1, y: 10, i: 'ContactCard', moved: false, static: false,
  }, {
    w: 1, h: 6, x: 1, y: 4, i: 'PictureCard', moved: false, static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'LayoutHandlerCard', moved: false, static: false,
  },
  {
    w: 1, h: 4, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
  },
  ],
  md: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', moved: false, static: false,
  }, {
    w: 2, h: 10, x: 2, y: 5, i: 'RepositoriesCard', moved: false, static: false,
  }, {
    w: 2, h: 4, x: 0, y: 11, i: 'ContactCard', moved: false, static: false,
  }, {
    w: 1, h: 11, x: 1, y: 0, i: 'PictureCard', moved: false, static: false,
  }, {
    w: 2, h: 5, x: 2, y: 0, i: 'LayoutHandlerCard', moved: false, static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
  }],
  sm: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', moved: false, static: false,
  }, {
    w: 2, h: 10, x: 0, y: 11, i: 'RepositoriesCard', moved: false, static: false,
  }, {
    w: 1, h: 3, x: 2, y: 4, i: 'ContactCard', moved: false, static: false,
  }, {
    w: 1, h: 7, x: 1, y: 4, i: 'PictureCard', moved: false, static: false,
  }, {
    w: 2, h: 4, x: 1, y: 0, i: 'LayoutHandlerCard', moved: false, static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
  }],
  xs: [{
    x: 0, y: 0, w: 1, h: 11, i: 'PersonalCard',
  }, {
    x: 0, y: 2, w: 2, h: 9, i: 'RepositoriesCard',
  }, {
    x: 1, y: 1, w: 1, h: 5, i: 'ContactCard',
  }, {
    x: 1, y: 0, w: 1, h: 6, i: 'PictureCard',
  }, {
    x: 1, y: 0, w: 1, h: 6, i: 'LayoutHandlerCard',
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
  }],
  xxs: [{
    w: 1, h: 11, x: 0, y: 0, i: 'PersonalCard', moved: false, static: false,
  }, {
    w: 2, h: 9, x: 0, y: 17, i: 'RepositoriesCard', moved: false, static: false,
  }, {
    w: 1, h: 5, x: 1, y: 12, i: 'ContactCard', moved: false, static: false,
  }, {
    w: 1, h: 6, x: 1, y: 0, i: 'PictureCard', moved: false, static: false,
  }, {
    w: 1, h: 6, x: 1, y: 6, i: 'LayoutHandlerCard', moved: false, static: false,
  }, {
    w: 1, h: 4, x: 1, y: 0, i: 'TechUsedCard', moved: false, static: false,
  }],
}
