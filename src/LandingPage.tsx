import React, { useMemo, useContext } from 'react'
import _ from 'lodash/fp'

import { useGridLayouts } from './hooks'
import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from './hooks/useGridLayouts'
import { ILayout, IBreakpointLayouts } from './hooks/useGridLayouts.d'
import {
  RepositoriesCard, PersonalCard, ContactCard, PictureCard, LayoutHandler,
} from './components/Cards'
import { ResponsiveGridLayout } from './components/ResponsiveGridLayout'
import { useLandingPageContext } from './contexts/LandingPageProvider'

import CardContainer from './components/Cards/CardContainer'

interface ICardLibraryStructure {
  // TODO: How to stop JSX error on rendering...
  PersonalCard: any,
  RepositoriesCard: any,
  ContactCard: any,
  PictureCard: any,
  LayoutHandler: any,
  [key: string]: any,
}

const CardLibrary: ICardLibraryStructure = {
  PersonalCard,
  RepositoriesCard,
  ContactCard,
  PictureCard,
  LayoutHandler,
}

const LandingPage = () => {
  // TODO: convert to Reducer/Context...
  const [currentLayouts, currentBreakpointLayouts, dispatchLayoutEffect] = useGridLayouts()
  const [{ isDraggable, isResizable }] = useLandingPageContext()

  const children = useMemo(() => (currentLayouts.map((layout: ILayout) => {
    const {
      i, ...rest
    } = layout
    const initialComponentState = _.find(
      ({ i: componentName }) => componentName === i, currentLayouts,
    )
    const minWidth = _.get('minWidth', initialComponentState)
    const minHeight = _.get('minHeight', initialComponentState)
    const maxWidth = _.get('maxWidth', initialComponentState)
    const maxHeight = _.get('maxHeight', initialComponentState)
    const Component = CardLibrary[i]

    return (
      // No children of identical keys allowed
      <CardContainer
        key={i}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        {...rest}
      >
        <Component
          dispatchLayoutEffect={dispatchLayoutEffect}
        />
      </CardContainer>
    )
  })), [currentLayouts])

  // TODO: give specific grid state type object
  const onLayoutChange = (layouts: Array<ILayout>, breakpointLayouts: IBreakpointLayouts) => {
    dispatchLayoutEffect({
      type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.ADD,
      payload: {
        breakpointLayouts,
      },
    })
  }

  return (
    <ResponsiveGridLayout
      onLayoutChange={onLayoutChange}
      layouts={currentBreakpointLayouts}
      isDraggable={isDraggable}
      isResizable={isResizable}
    >
      {children}
    </ResponsiveGridLayout>
  )
}

export default LandingPage
