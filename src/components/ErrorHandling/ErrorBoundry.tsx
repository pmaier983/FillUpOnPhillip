import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'

import { theme, variables } from '../../utils/theme'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${theme.lightAlert};
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
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
    const error = _.get('error', this.state)
    const children = _.get('children', this.props)
    if (errorInfo) {
      // eslint-disable-next-line no-console
      console.error(error.toString())
      // TODO: improve error handling
      return (
        <ErrorContainer>
          There Was an Error. Please email me at
          <br />
          <a href="mailto:pmaier983@gmail.com">pmaier983@gmail.com</a>
        </ErrorContainer>
      )
    }
    return children
  }
}

export default ErrorBoundary
