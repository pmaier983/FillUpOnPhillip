import React from 'react'
import {
  render,
  waitFor,
} from '@testing-library/react'
import { DocumentNode } from 'graphql'
import { MockedProvider } from '@apollo/react-testing'
import ErrorBoundry from '../../ErrorHandling/ErrorBoundry'

test.skip('Dont Test Utilities File', () => {})

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

interface Imock {
  request: {
    query: DocumentNode;
    // TODO: how to type an object of string?
    variables?: any;
  };
  error?: Error;
  result?: any;
}

interface ItestErrorBoundryProps {
  name: string,
  // TODO: make this more specific
  component: any,
  mockError: Imock[],
  errorMessage: string,
}

const testErrorBoundry = ({
  name, component, mockError, errorMessage,
}: ItestErrorBoundryProps) => {
  test(`Test throw Error of ${name}`, async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mockError} addTypename={false}>
        <ErrorBoundry>
          {component}
        </ErrorBoundry>
      </MockedProvider>,
    )
    await waitFor(() => expect(getByTestId('error-boundry')).toBeDefined())
    await waitFor(() => expect(getByText(errorMessage)).toBeDefined())
    await waitFor(() => expect(getByText('pmaier983@gmail.com')).toBeDefined())
  })
}

interface ItestLoadingIconProps {
  name: string,
  mock: Imock[],
  // TODO: make this more specific
  component: any,
}

const testLoadingIcon = ({
  name, mock, component,
}: ItestLoadingIconProps) => {
  test(`Test Loading Icon of ${name}`, async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mock} addTypename={false}>
        {component}
      </MockedProvider>,
    )
    await waitFor(() => expect(getByTestId('loading-icon')).toBeDefined())
  })
}

export { testErrorBoundry, testLoadingIcon }
