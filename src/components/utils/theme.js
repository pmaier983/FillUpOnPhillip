import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Red Hat Text');
    font-family: 'Red Hat Text', sans-serif;
  }
`

const colors = {
  eggshellWhite: "#EAE7DC",
  darkVanilla: "#D8C3A5",
  taupeGray: "#8E8D8A",
  lightJellyBeanRed: "#E98074",
  darkJellyBeanRed: "#E85A45",
  lightJellyBeanGreen: "#45e899",
  darkJellyBeanGreen: "#3dc983"
}

const minimalYetWarm = {
  majorBackgroundColor: colors.eggshellWhite,
  minorBackgroundColor: colors.darkVanilla,
  lineEmphasized: colors.taupeGray,
  darkAlert: colors.darkJellyBeanRed,
  lightAlert: colors.lightJellyBeanRed,
  lightApproval: colors.lightJellyBeanGreen,
  darkApproval: colors.darkJellyBeanGreen
}

const theme = minimalYetWarm

export { colors, GlobalStyles, theme }
