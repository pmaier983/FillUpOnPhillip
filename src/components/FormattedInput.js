import React from "react"
import styled from "styled-components"

import { colors } from "./utils/theme"
import { formatToUnit } from "./utils/helperFunctions"

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`

const Input = styled.input`
  border: none;
  outline-width: 2px;
  outline-color: ${colors.darkJellyBeanRed};
  background-color: ${colors.darkVanilla};
  height: ${props => props.height};
  width: ${props => props.width};
`

const FormattedInput = ({ name, width, height, boxStyling }) => {
  return (
    <InputContainer>
      {name}
      <Input
        style={boxStyling}
        width={formatToUnit(width)}
        height={formatToUnit(height)}
      />
    </InputContainer>
  )
}

export default FormattedInput
