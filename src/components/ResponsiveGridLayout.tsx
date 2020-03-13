import React from 'react'

import 'react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout'

import { layouts, breakpoints, columns } from '../layouts'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const ResponsiveGridLayout = ({ children, ...props }: any) => (
  <ResponsiveReactGridLayout
    rowHeight={20}
    breakpoints={breakpoints}
    cols={columns}
    layouts={layouts}
    isResizable
    draggableCancel=".react-grid-cancel-drag"
    draggableHandle=".react-grid-handle-drag"
    {...props}
  >
    {children}
  </ResponsiveReactGridLayout>
)

export { ResponsiveGridLayout }
