import React from 'react'
import {
  render,
} from '@testing-library/react'
import ErrorBoundry from '../ErrorBoundry'

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

const renderErrorBoundry = ({ shouldThrow }: IShouldThrowProp) => render(
  <ErrorBoundry>
    <MockComponent shouldThrow={shouldThrow} />
  </ErrorBoundry>,
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

describe(('Test ErrorBoundry.tsx'), () => {
  test('If no error is thrown, does the ErrorBoundry Trigger', () => {
    const { getByText } = renderErrorBoundry({ shouldThrow: false })
    expect(getByText(noErrorMessage)).toBeDefined()
  })
  test('If throw Error, does ErrorBoundry Trigger', () => {
    const { getByTestId, getByText } = renderErrorBoundry({ shouldThrow: true })
    expect(getByTestId('error-boundry')).toBeDefined()
    expect(getByText(errorMessage)).toBeDefined()
    expect(getByText('pmaier983@gmail.com')).toBeDefined()
  })
})
