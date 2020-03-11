import React from 'react'
import 'react-grid-layout/css/styles.css'
import _ from 'lodash/fp'
import RGL, { WidthProvider } from 'react-grid-layout'

import { useLocalStorage } from './hooks'
import {
  RepositoriesCard, PersonalCard, ContactCard, PictureCard,
} from './components/Cards'
import CardContainer from './components/Cards/CardContainer'

const ResponsiveReactGridLayout = WidthProvider(RGL)

interface ICardLibraryStructure {
  // TODO: How to stop JSX error on rendering...
  PersonalCard: any,
  RepositoriesCard: any,
  ContactCard: any,
  PictureCard: any,
  [key: string]: any,
}

const CardLibrary: ICardLibraryStructure = {
  PersonalCard,
  RepositoriesCard,
  ContactCard,
  PictureCard,
}

const initialGridState = [
  {
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
    minH: 9,
    minW: 2,
    i: 'RepositoriesCard',
  },
  {
    x: 1,
    y: 1,
    w: 1,
    h: 5,
    minH: 5,
    i: 'ContactCard',
  },
  {
    x: 1,
    y: 0,
    w: 1,
    h: 6,
    minH: 3,
    i: 'PictureCard',
  },
]

interface ILayoutObject {
  i: string;
}

const LandingPage = () => {
  const [localGridState, setLocalGridState] = useLocalStorage('graphqlGridViewState', initialGridState)

  const children = localGridState.map((layout: ILayoutObject) => {
    const {
      i, ...rest
    } = layout
    const initialComponentState = _.find(
      ({ i: componentName }) => componentName === i, initialGridState,
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
        data-grid={layout}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        {...rest}
      >
        <Component />
      </CardContainer>
    )
  })

  // TODO: give specific grid state type object
  const onLayoutChange = (gridState: any) => setLocalGridState(gridState)

  return (
    <ResponsiveReactGridLayout
      rowHeight={20}
      cols={2}
      isResizable
      onLayoutChange={onLayoutChange}
      draggableCancel=".react-grid-cancel-drag"
      draggableHandle=".react-grid-handle-drag"
    >
      {children}
    </ResponsiveReactGridLayout>
  )
}

export default LandingPage
