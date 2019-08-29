import React from "react"
import styled from "styled-components"

import { theme } from "./utils/theme"
import { formatToUnit } from "./utils/helperFunctions"

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  justify-content: space-between;
  height: ${props => props.height};
  width: ${props => props.width};
`

const Input = styled.input`
  border: none;
  outline-width: 2px;
  outline-color: ${theme.darkAlert};
  background-color: ${theme.minorBackgroundColor};
`

const TextAreaInput = styled.textarea`
  border: none;
  outline-width: 2px;
  outline-color: ${theme.darkAlert};
  background-color: ${theme.minorBackgroundColor};
`

const FormattedInput = ({ name, width, height, type, boxStyling }) => {
  return (
    <InputContainer width={formatToUnit(width)} height={formatToUnit(height)}>
      {name}
      {type === "textarea" ? (
        <TextAreaInput style={boxStyling} />
      ) : (
        <Input style={boxStyling} />
      )}
    </InputContainer>
  )
}

export default FormattedInput
