import React from 'react'
import _ from 'lodash/fp'
import RGL, { WidthProvider } from 'react-grid-layout'

import { useLocalStorage } from './hooks'
import { RepositoriesCard, PersonalCard, ContactCard } from './components/Cards'
import CardContainer from './components/Cards/CardContainer'

const ResponsiveReactGridLayout = WidthProvider(RGL)

interface ICardLibraryStructure {
  // TODO: How to stop JSX error on rendering...
  PersonalCard: any,
  RepositoriesCard: any,
  ContactCard: any,
  [key: string]: any,
}

const CardLibrary: ICardLibraryStructure = {
  PersonalCard,
  RepositoriesCard,
  ContactCard,
}

const initialGridState = [
  {
    x: 0,
    y: 0,
    w: 1,
    h: 11,
    i: 'PersonalCard',
    minWidth: '175px',
  },
  {
    x: 1,
    y: 0,
    w: 3,
    h: 8,
    i: 'RepositoriesCard',
    minWidth: '450px',
  },
  {
    x: 0,
    y: 0,
    w: 1,
    h: 4,
    i: 'ContactCard',
    minWidth: '130px',
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
      rowHeight={25}
      cols={4}
      onLayoutChange={onLayoutChange}
      draggableCancel=".react-grid-cancel-drag"
      draggableHandle=".react-grid-handle-drag"
    >
      {children}
    </ResponsiveReactGridLayout>
  )
}

export default LandingPage
