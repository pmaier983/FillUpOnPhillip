import useBoolean from './useBoolean'

interface ITriggerTimedBooleanProps {
  guaranteeInitialState: boolean,
  guaranteeFinalState: boolean,
}

const useTimedBoolean = (time: number = 5000, initialState: boolean = false) => {
  const [boolean, toggleBoolean] = useBoolean(initialState)

  const triggerTimedBoolean = (
    {
      guaranteeInitialState,
      guaranteeFinalState,
    }: ITriggerTimedBooleanProps,
  ) => {
    // have yet to find a way to guarantee synchronicity
    toggleBoolean(guaranteeInitialState)
    setTimeout(() => {
      toggleBoolean(guaranteeFinalState)
    }, (typeof time === 'number' ? time : 5000))
  }

  return [boolean, triggerTimedBoolean, toggleBoolean]
}

export default useTimedBoolean
