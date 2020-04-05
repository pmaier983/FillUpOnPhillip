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
  links: {
      github: string;
      website: string;
  };
}

// create a graphql server to Host this info
export const technologyUsed: ITechCard[] = [
  {
    displayName: 'Apollo',
    name: 'apollo-client',
    owner: 'apollographql',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ApolloLogo,
    links: {
      github: 'https://github.com/apollographql/react-apollo',
      website: 'https://www.apollographql.com/docs/react/',
    },
  },
  {
    displayName: 'GraphQL',
    name: 'graphql-spec',
    owner: 'GraphQL',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: GraphQLLogo,
    links: {
      github: 'https://github.com/graphql',
      website: 'https://graphql.org/',
    },
  },
  {
    displayName: 'Typescript',
    name: 'TypeScript',
    owner: 'microsoft',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: TypeScriptLogo,
    links: {
      github: 'https://github.com/microsoft/TypeScript',
      website: 'https://www.typescriptlang.org',
    },
  },
  {
    displayName: 'Styled Components',
    name: 'styled-components',
    owner: 'styled-components',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: StyledComponentsLogo,
    links: {
      github: 'https://github.com/styled-components/styled-components',
      website: 'https://styled-components.com/',
    },
  },
  {
    displayName: 'React',
    name: 'react',
    owner: 'facebook',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ReactLogo,
    links: {
      github: 'https://github.com/facebook/react',
      website: 'https://reactjs.org/',
    },
  },
  {
    displayName: 'React Testing Library',
    name: 'react-testing-library',
    owner: 'testing-library',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: ReactTestingLibraryLogo,
    links: {
      github: 'https://github.com/testing-library/react-testing-library',
      website: 'https://testing-library.com/docs/react-testing-library/intro',
    },
  },
  {
    displayName: 'React Grid Layout',
    name: 'React-Grid-Layout',
    owner: 'STRML',
    blurb: 'My work required me to build a flexible grid. Considering the time crunch I was under; I began searching for an open-sourced solution. I chose React-Grid-Layout (RGL) after reading the source code, researching it\'s community, comparing it to its closest competitors and building a proof of concept. To expedite my personal site as well as my professional work, I began work on this site with RGL top of mind.',
    icon: RGLLogo,
    links: {
      github: 'https://github.com/STRML/react-grid-layout',
      website: 'https://strml.github.io/react-grid-layout/examples/0-showcase.html',
    },
  },
  {
    displayName: 'Jest',
    name: 'jest',
    owner: 'facebook',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    icon: JestLogo,
    links: {
      github: 'https://github.com/facebook/jest',
      website: 'https://jestjs.io/',
    },
  },

]
