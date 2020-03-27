import { gql } from 'apollo-boost'

const GET_REPOSITORIES = gql`
  query {
    user(login: "pmaier983") {
      id
      repositories(privacy: PUBLIC, first: 100) {
        totalCount
        totalDiskUsage
        nodes {
          id
          name
          createdAt
          description
          url
        }
      }
    }
  }
`

const MY_PROFILE = gql`
  query { 
    user(login: "pmaier983") {
      id
      name
      avatarUrl
      bio
      isHireable
      location
      company
      email
    }
  }
`

export {
  MY_PROFILE, GET_REPOSITORIES,
}
