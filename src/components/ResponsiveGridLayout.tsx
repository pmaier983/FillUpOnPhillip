import React from 'react'

import 'react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout'

import { breakpoints, columns, getRowCount } from '../layouts'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const ResponsiveGridLayout = ({ children, layouts, ...props }: any) => (
  <ResponsiveReactGridLayout
    rowHeight={getRowCount()}
    breakpoints={breakpoints}
    cols={columns}
    isResizable
    layouts={layouts}
    draggableCancel=".react-grid-cancel-drag"
    draggableHandle=".react-grid-handle-drag"
    {...props}
  >
    {children}
  </ResponsiveReactGridLayout>
)


export { ResponsiveGridLayout }
