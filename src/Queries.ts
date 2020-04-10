import { gql } from 'apollo-boost'

const RepositoryFragment = gql`
  fragment RepositoryFragment on Repository {
    id
    name
    createdAt
    description
    url
  }
`

// TODO: repo fragment
const GET_PERSONAL_REPOSITORIES = gql`
  query {
    user(login: "pmaier983") {
      id
      repositories(privacy: PUBLIC, first: 100) {
        totalCount
        totalDiskUsage
        nodes {
          ...RepositoryFragment
        }
      }
    }
  }
  ${RepositoryFragment}
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

const GET_REPOSITORY = gql`
  query getRepository($name: String!, $owner: String!){ 
    repository(name: $name, owner: $owner) {
      createdAt
      description
      diskUsage
      homepageUrl
      updatedAt
      url
    }
  }
`

export {
  MY_PROFILE, GET_PERSONAL_REPOSITORIES, GET_REPOSITORY,
}
