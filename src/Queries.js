import { gql } from 'apollo-boost'

// TODO: redo using fragments
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
        }
      }
    }
  }
`

const GET_EMAIL = gql`
  query {
    repository(owner:"octocat", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const BAD_EMAIL = gql`
  query {
    repository(owner:"111111", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const MY_REPOSITORY_LIST = gql`
  query {
    user(login: "pmaier983") {
      id
      repositories(first: 3) {
        edges {
          node {
            name
            createdAt
          }
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
  GET_EMAIL, MY_PROFILE, BAD_EMAIL, MY_REPOSITORY_LIST, GET_REPOSITORIES,
}
