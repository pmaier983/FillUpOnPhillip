import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'

import { variables } from '../../utils/variables'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.lightAlert};
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
  border-bottom-left-radius: ${variables.borderRadiusNormal};
  border-bottom-right-radius: ${variables.borderRadiusNormal};
`

class ErrorBoundary extends Component {
  constructor(props: React.FC) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  // TODO: get specific error type
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const errorInfo = _.get('errorInfo', this.state)
    const error = _.get('error.message', this.state)
    const children = _.get('children', this.props)
    if (errorInfo) {
      // TODO: improve error handling
      return (
        <ErrorContainer data-testid="error-boundary">
          <span>{error}</span>
          <span>Please Contact me below if you need anything</span>
          <a href="mailto:pmaier983@gmail.com">pmaier983@gmail.com</a>
        </ErrorContainer>
      )
    }
    return children
  }
}

export default ErrorBoundary
