const ApolloLogo = require('./Apollo-logo.svg')
const GraphQLLogo = require('./GraphQL-logo.png')
const TypeScriptLogo = require('./TypeScript-logo.png')
const StyledComponentsLogo = require('./StyledComponents-logo.png')
const ReactLogo = require('./React-logo.png')
const RGLLogo = require('./RGL-logo.png')
const ReactTestingLibraryLogo = require('./ReactTestingLibrary-logo.png')
const JestLogo = require('./Jest-logo.png')

export interface ITechCard {
  displayName: string,
  name: string,
  owner: string,
  icon: any;
  blurb: string;
}

// create a graphql server to Host this info
export const technologyUsed: ITechCard[] = [
  {
    displayName: 'Apollo',
    name: 'apollo-client',
    owner: 'apollographql',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ApolloLogo,
  },
  {
    displayName: 'GraphQL',
    name: 'graphql-spec',
    owner: 'GraphQL',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: GraphQLLogo,
  },
  {
    displayName: 'Typescript',
    name: 'TypeScript',
    owner: 'microsoft',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: TypeScriptLogo,
  },
  {
    displayName: 'Styled Components',
    name: 'styled-components',
    owner: 'styled-components',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: StyledComponentsLogo,
  },
  {
    displayName: 'React',
    name: 'react',
    owner: 'facebook',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ReactLogo,
  },
  {
    displayName: 'React Testing Library',
    name: 'react-testing-library',
    owner: 'testing-library',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ReactTestingLibraryLogo,
  },
  {
    displayName: 'React Grid Layout',
    name: 'React-Grid-Layout',
    owner: 'STRML',
    blurb: 'My work required me to build a flexible grid. Considering the time crunch I was under; I began searching for an open-sourced solution. I chose React-Grid-Layout (RGL) after reading the source code, researching it\'s community, comparing it to its closest competitors and building a proof of concept. To expedite my personal site as well as my professional work, I began work on this site with RGL top of mind.',
    icon: RGLLogo,
  },
  {
    displayName: 'Jest',
    name: 'jest',
    owner: 'facebook',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: JestLogo,
  },

]
