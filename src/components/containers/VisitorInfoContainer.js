import React from "react"
import styled from "styled-components"

import { theme } from "../utils/theme"

import FormattedInput from "../FormattedInput"

const CenteredContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Label = styled.div`
  margin: 20px;
  align-self: center;
`

const Button = styled.div`
  background-color: ${theme.minorBackgroundColor};
  border: 3px dashed ${theme.lightAlert};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  :active {
    border: 3px solid ${theme.darkAlert};
  }
`

const VisitorInfoContainer = () => {
  console.log()
  return (
    <CenteredContainer>
      <Label>Tell me About Yourself</Label>
      <FormattedInput
        name="name:"
        width="250"
        boxStyling={{ width: "150px" }}
      />
      <FormattedInput
        name="email:"
        width="250"
        boxStyling={{ width: "150px" }}
      />
      <FormattedInput
        name="note:"
        width="250"
        height="150"
        type="textarea"
        boxStyling={{ width: "148px" }}
      />
      <Button onClick={() => console.log("I was clicked")}>
        Send To Phillip
      </Button>
    </CenteredContainer>
  )
}

export default VisitorInfoContainer
