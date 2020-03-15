import React from 'react'
import styled from 'styled-components'
import { GRID_BREAKPOINT_LAYOUTS_ACTIONS } from '../../hooks/useGridLayouts'
import { IActions } from '../../hooks/useGridLayouts.d'

import CardHandle from './CardHandle'

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 20px);
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
        <button type="button" onClick={handleResetLayout}>Reset</button>
        <button type="button" onClick={handleUndoLayout}>Undo</button>
        <button type="button" onClick={handleRedoLayout}>Redo</button>
      </CardContent>
    </>
  )
}

export default LayoutHandler
