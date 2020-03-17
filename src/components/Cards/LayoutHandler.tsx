import React from 'react'
import styled from 'styled-components'

import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../hooks/useGridLayouts'
import { IActions } from '../../hooks/useGridLayouts.d'

import MaterialIcon from '../MaterialIcon'
import CardHandle from './CardHandle'

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

const LayoutHandler = (
  { dispatchLayoutEffect }: {dispatchLayoutEffect: React.Dispatch<IActions>},
) => {
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
  return (
    <>
      <CardHandle height="20px" />
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
        </ContentContainer>
      </CardContent>
    </>
  )
}

export default LayoutHandler
