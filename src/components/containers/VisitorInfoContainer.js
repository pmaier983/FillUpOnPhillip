import React from "react"

import FormattedInput from "../FormattedInput"

const VisitorInfoContainer = () => {
  console.log()
  return (
    <React.Fragment>
      <div>Tell me About Yourself</div>
      <FormattedInput name="name:" />
      <FormattedInput name="email:" />
      <FormattedInput name="note:" height="150" />
    </React.Fragment>
  )
}

export default VisitorInfoContainer
