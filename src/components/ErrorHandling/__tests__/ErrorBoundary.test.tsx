import React from 'react'
import {
  render,
} from '@testing-library/react'
import ErrorBoundary from '../ErrorBoundary'

const errorMessage = 'O Dear, There has been an Error'
const noErrorMessage = 'well done old chap'

interface IShouldThrowProp {
  shouldThrow: boolean,
}

const MockComponent = ({ shouldThrow }: IShouldThrowProp) => {
  if (shouldThrow) {
    throw Error(errorMessage)
  }
  return <span>{noErrorMessage}</span>
}

const renderErrorBoundary = ({ shouldThrow }: IShouldThrowProp) => render(
  <ErrorBoundary>
    <MockComponent shouldThrow={shouldThrow} />
  </ErrorBoundary>,
)

// TODO: how to handle hiding this error in a better way
// talking about console error, not eslint error

// eslint-disable-next-line no-console
const consoleError = console.error
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = () => {}
})

afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = consoleError
})

describe(('Test ErrorBoundary.tsx'), () => {
  test('If no error is thrown, does the ErrorBoundary Trigger', () => {
    const { getByText } = renderErrorBoundary({ shouldThrow: false })
    expect(getByText(noErrorMessage)).toBeDefined()
  })
  test('If throw Error, does ErrorBoundary Trigger', () => {
    const { getByTestId, getByText } = renderErrorBoundary({ shouldThrow: true })
    expect(getByTestId('error-boundary')).toBeDefined()
    expect(getByText(errorMessage)).toBeDefined()
    expect(getByText('pmaier983@gmail.com')).toBeDefined()
  })
})
