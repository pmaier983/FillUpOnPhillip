const RGLIcon = require('./RGL-Icon.png')

export interface ITechCard {
  name: string;
  blurb: string;
  icon: any;
  links: {
      github: string;
      website: string;
  };
}

// create a graphql server to Host this info
export const technologyUsed: ITechCard[] = [
  {
    name: 'React-Grid-Layout',
    blurb: 'My work required me to build a flexible grid. Considering the time crunch I was under; I began searching for an open-sourced solution. I chose React-Grid-Layout (RGL) after reading the source code, researching it\'s community, comparing it to its closest competitors and building a proof of concept. To expedite my personal site as well as my professional work, I began this site with RGL top of mind.',
    icon: RGLIcon,
    links: {
      github: 'https://github.com/STRML/react-grid-layout',
      website: 'https://strml.github.io/react-grid-layout/examples/0-showcase.html',
    },
  },
]
