const colors = {
  eggshellWhite: '#EAE7DC',
  daySkyLightBlue: '#A0E4FA',
  sunYellow: '#FDDF75',
  nightSkyBlack: '#3C4145',
  moonGrey: '#F4F5E9',
  darkVanilla: '#D8C3A5',
  darkVanillaRGBA: 'rgba(55.7, 55.3, 54.1, 0.25)',
  taupeGray: '#8E8D8A',
  lightJellyBeanRed: '#E98074',
  darkJellyBeanRed: '#E85A45',
  lightJellyBeanGreen: '#45e899',
  darkJellyBeanGreen: '#3dc983',
  black: '#000000',
  white: '#FFFFFF',
}

export interface IThemes {
  themeName: string,
  majorBackgroundColor: string,
  minorBackgroundColor: string,
  minorBackgroundColorSoft: string,
  lineEmphasized: string,
  handleArea: string,
  normalTooltipColor: string,
  buttonEmphasis: string,
  darkAlert: string,
  lightAlert: string,
  lightApproval: string,
  darkApproval: string,
  borderBasic: string,
}

export const THEME_NAMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

const LIGHT: IThemes = {
  themeName: THEME_NAMES.LIGHT,
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

const DARK: IThemes = {
  themeName: THEME_NAMES.DARK,
  majorBackgroundColor: colors.eggshellWhite,
  minorBackgroundColor: colors.white,
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

export const THEMES = {
  [THEME_NAMES.LIGHT]: LIGHT,
  [THEME_NAMES.DARK]: DARK,
}

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

export { colors, variables }
