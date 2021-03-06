import React, { useState } from 'react'

type useBooleanType = (initialState: boolean) => [
  boolean,
  (stateOverride?: boolean) => void,
  React.Dispatch<React.SetStateAction<boolean>>
]

const useBoolean: useBooleanType = (initialState = false) => {
  const [boolean, setBoolean] = useState(initialState)

  const toggleBoolean = (stateOverride?: boolean) => {
    setBoolean(stateOverride || !boolean)
  }

  return [boolean, toggleBoolean, setBoolean]
}

export default useBoolean
