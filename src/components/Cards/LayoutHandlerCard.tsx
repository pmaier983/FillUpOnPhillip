import React from 'react'
import styled from 'styled-components'

import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../hooks/useGridLayouts'
import { IActions } from '../../hooks/useGridLayouts.d'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { variables } from '../../utils/theme'

import MaterialIcon from '../MaterialIcon'
import ToggleButton from '../ToggleButton'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 20px);
  align-items: center;  
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`

// TODO: find a better way of handling padding vs. 98%
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;
  text-decoration: underline;
  margin-top: ${variables.marginSmall};
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${variables.marginSmall};
`

interface ILayoutHandlerProps {
  dispatchLayoutEffect: React.Dispatch<IActions>,
  handleDraggable: (stateOverride: boolean) => void,
  handleResizable: (stateOverride: boolean) => void,
  isResizable: boolean,
  isDraggable: boolean,
}

const LayoutHandlerCard = (
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
          <MaterialIcon name="arrow_back" onClick={handleUndoLayout} hasHoverEffect />
          <MaterialIcon name="arrow_forward" onClick={handleRedoLayout} hasHoverEffect />
        </NavigationContainer>
        Layout Management Interface
        <MaterialIcon name="refresh" onClick={handleResetLayout} hasHoverEffect />
      </HeaderContainer>
      <ContentContainer>
        <ButtonContainer>
          Toggle Draggability
          <ToggleButton
            width={80}
            height={30}
            toggleState={isDraggable}
            handleToggle={handleDraggable}
          />
        </ButtonContainer>
        <ButtonContainer>
          Toggle Resizability
          <ToggleButton
            width={80}
            height={30}
            toggleState={isResizable}
            handleToggle={handleResizable}
          />
        </ButtonContainer>
      </ContentContainer>
    </CardContent>
  )
}

export default LayoutHandlerCard
