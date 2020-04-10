const colors = {
  eggshellWhite: '#EAE7DC',
  darkVanilla: '#D8C3A5',
  darkVanillaRGBA: 'rgba(55.7, 55.3, 54.1, 0.25)',
  taupeGray: '#8E8D8A',
  lightJellyBeanRed: '#E98074',
  darkJellyBeanRed: '#E85A45',
  lightJellyBeanGreen: '#45e899',
  darkJellyBeanGreen: '#3dc983',
  black: '#000000',
}

const minimalYetWarm = {
  majorBackgroundColor: colors.eggshellWhite,
  minorBackgroundColor: colors.darkVanilla,
  minorBackgroundColorSoft: colors.darkVanillaRGBA,
  lineEmphasized: colors.taupeGray,
  handleArea: colors.taupeGray,
  normalTooltipColor: colors.taupeGray,
  buttonEmphasis: colors.taupeGray,
  darkAlert: colors.darkJellyBeanRed,
  lightAlert: colors.lightJellyBeanRed,
  lightApproval: colors.lightJellyBeanGreen,
  darkApproval: colors.darkJellyBeanGreen,
  borderBasic: colors.black,
}

const theme = minimalYetWarm

const variables = {
  fontLarge: '17px',
  fontMedium: '14px',
  fontNormal: '12px',
  fontSmall: '10px',

  fontWeightLight: 100,
  fontWeightNormal: 300,
  fontWeightStrong: 700,

  borderRadiusNormal: '5px',

  marginSmall: '2px',

  cardHeaderHeight: '20px',

  createdDateFormat: 'MMMM Do YYYY',
  specificTimeFormat: 'MMMM Do YYYY h:mm:ss',

  daysInYear: 365,
}

export { colors, theme, variables }
