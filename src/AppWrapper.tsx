import React, { useState, useMemo } from 'react'
import { ApolloProvider } from 'react-apollo'

import getApolloClient from './ApolloClient'
import AlertContainer from './alert/AlertContainer'
import { useTimedBoolean } from './hooks'

const AppWrapper = ({ children }: any) => {
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>()
  const [visible, timedVisibility] = useTimedBoolean(6000, false)

  const setAlert = (alertMessage: string) => {
    setErrorMessage(alertMessage)
    timedVisibility({ guaranteeInitialState: true, guaranteeFinalState: false })
  }

  const client = useMemo(
    () => getApolloClient({ onErrorMessage: setAlert }),
    [],
  )

  return (
    <ApolloProvider client={client}>
      {children}
      {visible && (
      <AlertContainer>{errorMessage}</AlertContainer>
      )}
    </ApolloProvider>
  )
}

export default AppWrapper
