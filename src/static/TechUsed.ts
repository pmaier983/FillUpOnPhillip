const ApolloLogo = require('./Apollo-logo.svg')
const GraphQLLogo = require('./GraphQL-logo.png')
const TypeScriptLogo = require('./TypeScript-logo.png')
const StyledComponentsLogo = require('./StyledComponents-logo.png')
const ReactLogo = require('./React-logo.png')
const RGLLogo = require('./RGL-logo.png')
const ReactTestingLibraryLogo = require('./ReactTestingLibrary-logo.png')
const JestLogo = require('./Jest-logo.png')

export interface ITechCard {
  name: string;
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
    name: 'Apollo',
    owner: 'apollographql',
    blurb: '',
    icon: ApolloLogo,
    links: {
      github: 'https://github.com/apollographql/react-apollo',
      website: 'https://www.apollographql.com/docs/react/',
    },
  },
  {
    name: 'GraphQL',
    owner: 'GraphQL',
    blurb: '',
    icon: GraphQLLogo,
    links: {
      github: 'https://github.com/graphql',
      website: 'https://graphql.org/',
    },
  },
  {
    name: 'TypeScript',
    owner: 'microsoft',
    blurb: '',
    icon: TypeScriptLogo,
    links: {
      github: 'https://github.com/microsoft/TypeScript',
      website: 'https://www.typescriptlang.org',
    },
  },
  {
    name: 'styled-components',
    owner: 'styled-components',
    blurb: '',
    icon: StyledComponentsLogo,
    links: {
      github: 'https://github.com/styled-components/styled-components',
      website: 'https://styled-components.com/',
    },
  },
  {
    name: 'facebook',
    owner: 'react',
    blurb: '',
    icon: ReactLogo,
    links: {
      github: 'https://github.com/facebook/react',
      website: 'https://reactjs.org/',
    },
  },
  {
    name: 'testing-library',
    owner: 'react-testing-library',
    blurb: '',
    icon: ReactTestingLibraryLogo,
    links: {
      github: 'https://github.com/testing-library/react-testing-library',
      website: 'https://testing-library.com/docs/react-testing-library/intro',
    },
  },
  {
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
    name: 'facebook',
    owner: 'jest',
    blurb: '',
    icon: JestLogo,
    links: {
      github: 'https://github.com/facebook/jest',
      website: 'https://jestjs.io/',
    },
  },

]
