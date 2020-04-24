import {
  renderHook,
  act,
} from '@testing-library/react-hooks'
import useBoolean from '../useBoolean'

const renderUseBoolean = (options?: any) => renderHook(useBoolean, options)

renderUseBoolean.defaultProps = {
  options: { initialProps: true },
}

describe('Test useBoolean.tsx ', () => {
  test('Test that all the returns work', () => {
    const options = { initialProps: false }
    const { result } = renderUseBoolean(options)

    expect(result.current[0]).toBe(options.initialProps)
    act(() => result.current[1]())
    expect(result.current[0]).toBe(!options.initialProps)
    act(() => result.current[2](false))
    expect(result.current[0]).toBe(false)
    act(() => result.current[1](true))
    expect(result.current[0]).toBe(true)
  })
})
