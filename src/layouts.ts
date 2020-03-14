import { IBreakpointLayouts } from './hooks/useGridLayouts.d'

export const columns = {
  lg: 2, md: 2, sm: 2, xs: 2, xxs: 2,
}

export const breakpoints = {
  lg: 1200, md: 1024, sm: 768, xs: 568, xxs: 320,
}

export const initialGridLayouts: IBreakpointLayouts = {
  lg: [{
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 9,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    i: 'PictureCard',
  }],
  md: [{
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 9,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    i: 'PictureCard',
  }],
  sm: [{
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 9,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    i: 'PictureCard',
  }],
  xs: [{
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 9,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    i: 'PictureCard',
  }],
  xxs: [{
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 9,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    i: 'PictureCard',
  }],
}
