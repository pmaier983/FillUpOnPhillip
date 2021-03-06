import { gql } from '@apollo/client'

const RepositoryFragment = gql`
  fragment RepositoryFragment on Repository {
    id
    name
    createdAt
    description
    url
    __typename
  }
`

// TODO: repo fragment
const GET_PERSONAL_REPOSITORIES = gql`
  query {
    user(login: "pmaier983") {
      id
      repositories(privacy: PUBLIC, first: 100) {
        nodes {
          ...RepositoryFragment
        }
      }
    }
  }
  ${RepositoryFragment}
`

const MY_PROFILE = gql`
  query getProfile($userName: String!){ 
    user(login: $userName) {
      id
      name
      avatarUrl
      bio
      isHireable
      location
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
