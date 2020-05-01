import React from 'react'
import styled from 'styled-components'

import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../hooks/useGridLayouts'
import { IActions } from '../../hooks/useGridLayouts.d'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { useThemesContext, THEME_ACTIONS } from '../../contexts/ThemesProvider'
import { THEME_NAMES, colors } from '../../utils/theme'
import { variables } from '../../utils/variables'

import MaterialIcon from '../MaterialIcon'
import ToggleButton from '../ToggleButton'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
  align-items: center;  
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

const CardTitle = styled.div`
  text-align: center;
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
}

const LayoutHandlerCard = (
  {
    dispatchLayoutEffect,
  }: ILayoutHandlerProps,
) => {
  const [{ isDraggable, isResizable }, dispatchLandingPageAction] = useLandingPageContext()
  const [{
    theme: { themeName, lightApproval, lightAlert },
  }, dispatchThemeAction] = useThemesContext()

  const isLightTheme = themeName === THEME_NAMES.LIGHT

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

  const changeTheme = () => {
    dispatchThemeAction(
      {
        type: THEME_ACTIONS.UPDATE_LANDING_PAGE_THEME,
        payload: isLightTheme ? THEME_NAMES.DARK : THEME_NAMES.LIGHT,
      },
    )
  }

  return (
    <CardContent>
      <HeaderContainer>
        <NavigationContainer>
          <MaterialIcon name="arrow_back" onClick={handleUndoLayout} hasHoverEffect />
          <MaterialIcon name="arrow_forward" onClick={handleRedoLayout} hasHoverEffect />
        </NavigationContainer>
        <CardTitle>Layout Management</CardTitle>
        <MaterialIcon name="refresh" onClick={handleResetLayout} hasHoverEffect />
      </HeaderContainer>
      <ContentContainer>
        <ButtonContainer>
          Toggle Draggability
          <ToggleButton
            width={80}
            height={35}
            testid="toggle-draggability"
            trueBackgroundColor={lightApproval}
            falseBackgroundColor={lightAlert}
            toggleState={isDraggable}
            handleToggle={handleDraggable}
          />
        </ButtonContainer>
        <ButtonContainer>
          Toggle Resizability
          <ToggleButton
            width={80}
            height={35}
            testid="toggle-resizability"
            trueBackgroundColor={lightApproval}
            falseBackgroundColor={lightAlert}
            toggleState={isResizable}
            handleToggle={handleResizable}
          />
        </ButtonContainer>
        <ButtonContainer>
          Toggle Theme
          <ToggleButton
            width={80}
            enableToggleIndicator={false}
            height={35}
            testid="toggle-theme"
            trueBackgroundColor={colors.daySkyLightBlue}
            falseBackgroundColor={colors.nightSkyBlack}
            leftValue={isLightTheme && <MaterialIcon name="wb_sunny" display="flex" color={colors.sunYellow} />}
            rightValue={!isLightTheme && <MaterialIcon name="nights_stay" display="flex" color={colors.moonGrey} />}
            toggleState={isLightTheme}
            handleToggle={changeTheme}
          />
        </ButtonContainer>
      </ContentContainer>
    </CardContent>
  )
}

export default LayoutHandlerCard
