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
    blurb: 'Apollo is the most beginner-friendly Graphql client. Though looking back I would likely use react-query instead.',
    icon: ApolloLogo,
  },
  {
    displayName: 'GraphQL',
    name: 'graphql-spec',
    owner: 'GraphQL',
    blurb: 'Solves the overfetching problems associated with RESTful APIs.',
    icon: GraphQLLogo,
  },
  {
    displayName: 'Typescript',
    name: 'TypeScript',
    owner: 'microsoft',
    blurb: 'Typescript allows me to write fewer tests and catch more errors. Overall a massive improvement over PropTypes, but could have better autocomplete vis-à-vis flow.',
    icon: TypeScriptLogo,
  },
  {
    displayName: 'Styled Components',
    name: 'styled-components',
    owner: 'styled-components',
    blurb: 'CSS-in-JS is awesome. I will likely try out Emotion in a future project but for now, I\'m a big fan of styled-components.',
    icon: StyledComponentsLogo,
  },
  {
    displayName: 'React',
    name: 'react',
    owner: 'facebook',
    blurb: 'React is the first framework I learned. I will likely try Vue in the future, but React will always have a special place in my heart.',
    icon: ReactLogo,
  },
  {
    displayName: 'React Testing Library',
    name: 'react-testing-library',
    owner: 'testing-library',
    blurb: 'React Testing Library forced me to code declarative tests. Enzyme is awesome, but it makes it too easy for me to write Imperative tests that often become flaky in the long run.',
    icon: ReactTestingLibraryLogo,
  },
  {
    displayName: 'React Grid Layout',
    name: 'React-Grid-Layout',
    owner: 'STRML',
    blurb: 'My work required me to build a flexible grid. Considering the time crunch I was under; I began searching for an open-sourced solution. I chose React-Grid-Layout (RGL) after reading the source code, researching it\'s community, comparing it to its closest competitors, and building a proof of concept. To expedite my site as well as my professional work, I began work with RGL top of mind.',
    icon: RGLLogo,
  },
  {
    displayName: 'Jest',
    name: 'jest',
    owner: 'facebook',
    blurb: 'Jest was fine. I think I need to learn more about it to fully leverage it but for now, it\'s just fine.',
    icon: JestLogo,
  },

]
