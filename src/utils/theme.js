const colors = {
  eggshellWhite: '#EAE7DC',
  darkVanilla: '#D8C3A5',
  taupeGray: '#8E8D8A',
  lightJellyBeanRed: '#E98074',
  darkJellyBeanRed: '#E85A45',
  lightJellyBeanGreen: '#45e899',
  darkJellyBeanGreen: '#3dc983',
}

const minimalYetWarm = {
  majorBackgroundColor: colors.eggshellWhite,
  minorBackgroundColor: colors.darkVanilla,
  lineEmphasized: colors.taupeGray,
  handleArea: colors.taupeGray,
  darkAlert: colors.darkJellyBeanRed,
  lightAlert: colors.lightJellyBeanRed,
  lightApproval: colors.lightJellyBeanGreen,
  darkApproval: colors.darkJellyBeanGreen,
}

const theme = minimalYetWarm

const variables = {
  largeFont: '17px',
  normalFont: '12px',
  smallFont: '10px',
}

export { colors, theme, variables }
