// TODO: when to use .d.ts file???
export interface ILayout {
  x: number,
  y: number,
  w: number,
  h: number,
  i: string,
}

export interface IBreakpointLayouts {
  [lg: string]: Array<ILayout>,
  [md: string]: Array<ILayout>,
  [sm: string]: Array<ILayout>,
  [xs: string]: Array<ILayout>,
  [xxs: string]: Array<ILayout>,
}

export interface ILayoutsState {
  breakpointLayoutsStack: Array<IBreakpointLayouts>,
  breakpointLayoutsStackCurrentIndex: number,
  setlocalLayouts: (x: any) => void,
}

export interface IActions {
  // TODO: add specific typing
  type: string,
  payload: {
    breakpointLayouts: IBreakpointLayouts
  }
}

export type BuildInitialStateProps = (
  {initialState: IBreakpointLayouts, setlocalLayouts: (x: any) => void}
  )
