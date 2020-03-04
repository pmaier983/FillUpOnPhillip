import useBoolean from './useBoolean'

interface ITriggerTimedBooleanProps {
  guaranteeInitialState: boolean,
  guaranteeFinalState: boolean,
}

type TriggerTimedBoolean = ({ guaranteeInitialState, guaranteeFinalState }: ITriggerTimedBooleanProps) => void

type UseTimedBoolean = (time: number, initialState: boolean) => [
  boolean,
  TriggerTimedBoolean,
  (stateOverride: boolean) => void
]

const useTimedBoolean: UseTimedBoolean = (time: number = 5000, initialState: boolean = false) => {
  const [boolean, toggleBoolean] = useBoolean(initialState)

  const triggerTimedBoolean: TriggerTimedBoolean = ({ guaranteeInitialState, guaranteeFinalState }) => {
    // have yet to find a way to guarantee synchronicity
    toggleBoolean(guaranteeInitialState)
    setTimeout(() => {
      toggleBoolean(guaranteeFinalState)
    }, (typeof time === 'number' ? time : 5000))
  }

  return [boolean, triggerTimedBoolean, toggleBoolean]
}

export default useTimedBoolean
