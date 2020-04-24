import {
  renderHook,
  act,
} from '@testing-library/react-hooks'
import useLocalStorage from '../useLocalStorage'

const renderUseLocalStorage = (options: any) => renderHook(useLocalStorage, options)

describe('Test useLocalStorage.tsx ', () => {
  test('Test that localStorage is actually storing things', () => {
    const { result, rerender } = renderUseLocalStorage({ initialProps: { key: 'theKey', initialValue: 1 } })
    expect(result.current[0]).toBe(1)
    act(() => result.current[1](2))
    expect(result.current[0]).toBe(2)
    const moreComplexValue = { a: { b: { c: { d: { hello: 'world' } } } } }
    act(() => result.current[1](moreComplexValue))
    expect(result.current[0]).toBe(moreComplexValue)
    rerender()
    // keep the same state after re-render
    expect(result.current[0]).toBe(moreComplexValue)
  })
})
