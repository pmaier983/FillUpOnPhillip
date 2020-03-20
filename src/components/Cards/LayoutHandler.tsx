import React from 'react'
import styled from 'styled-components'

import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../hooks/useGridLayouts'
import { IActions } from '../../hooks/useGridLayouts.d'
import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'

import MaterialIcon from '../MaterialIcon'
import ToggleButton from '../ToggleButton'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 20px);
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 5px;  
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
`

interface ILayoutHandlerProps {
  dispatchLayoutEffect: React.Dispatch<IActions>,
  handleDraggable: (stateOverride: boolean) => void,
  handleResizable: (stateOverride: boolean) => void,
  isResizable: boolean,
  isDraggable: boolean,
}

const LayoutHandler = (
  {
    dispatchLayoutEffect,
  }: ILayoutHandlerProps,
) => {
  const [{ isDraggable, isResizable }, dispatchLandingPageAction] = useLandingPageContext()

  const handleResetLayout = () => {
    dispatchLayoutEffect({
      type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.RESET,
    })
  }

  const handleUndoLayout = () => {
    dispatchLayoutEffect({
      type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.UNDO,
    })
  }

  const handleRedoLayout = () => {
    dispatchLayoutEffect({
      type: GRID_BREAKPOINT_LAYOUTS_ACTIONS.REDO,
    })
  }

  const handleDraggable = () => {
    dispatchLandingPageAction({ type: LANDING_PAGE_ACTIONS.IS_DRAGGABLE })
  }

  const handleResizable = () => {
    dispatchLandingPageAction({ type: LANDING_PAGE_ACTIONS.IS_RESIZABLE })
  }

  return (
    <CardContent>
      <HeaderContainer>
        <NavigationContainer>
          <MaterialIcon name="arrow_back" onClick={handleUndoLayout} />
          <MaterialIcon name="arrow_forward" onClick={handleRedoLayout} />
        </NavigationContainer>
        Layout Management Interface
        <MaterialIcon name="refresh" onClick={handleResetLayout} />
      </HeaderContainer>
      <ContentContainer>
        <ToggleButton
          width={100}
          height={50}
          toggleState={isDraggable}
          handleToggle={handleDraggable}
        />
        <ToggleButton
          width={100}
          height={50}
          toggleState={isResizable}
          handleToggle={handleResizable}
        />
      </ContentContainer>
    </CardContent>
  )
}

export default LayoutHandler
