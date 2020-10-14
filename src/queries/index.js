import { gql } from "@apollo/client"

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      username
      password
      email
      createdAt
      isAdmin
    }
  }
`

const GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      password
      email
      isAdmin
    }
  }
`

const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      userInfo {
        id
        username
        email
        isAdmin
      }
      expiresAt
      token
    }
  }
`

const REGISTER_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
    $isAdmin: Boolean!
  ) {
    addUser(
      username: $username
      password: $password
      confirmPassword: $confirmPassword
      email: $email
      isAdmin: $isAdmin
    ) {
      userInfo {
        id
        username
        email
        isAdmin
      }
      expiresAt
      token
    }
  }
`

// need to update edit user to userInfo

const EDIT_USER = gql`
  mutation editUser(
    $userId: ID!
    $username: String
    $password: String
    $confirmPassword: String
    $email: String
    $isAdmin: Boolean
  ) {
    editUser(
      userId: $userId
      username: $username
      password: $password
      confirmPassword: $confirmPassword
      email: $email
      isAdmin: $isAdmin
    ) {
      id
      email
      username
      password
      isAdmin
    }
  }
`

// need to update delete user to userInfo

const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      id
      username
      password
      email
      isAdmin
    }
  }
`

// Posts

const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      description
      image
      username
      published
      createdAt
    }
  }
`

const GET_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      description
      image
      username
      published
      createdAt
    }
  }
`

const CREATE_POST = gql`
  mutation addPost(
    $title: String!
    $description: String!
    $image: String
    $published: Boolean!
  ) {
    addPost(
      title: $title
      description: $description
      image: $image
      published: $published
    ) {
      id
      title
      description
      image
      username
      published
      createdAt
    }
  }
`

const EDIT_POST = gql`
  mutation editPost(
    $postId: ID!
    $title: String!
    $description: String!
    $image: String
    $published: Boolean!
  ) {
    editPost(
      postId: $postId
      title: $title
      description: $description
      image: $image
      published: $published
    ) {
      id
      title
      description
      image
      username
      published
      createdAt
    }
  }
`

const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
      title
      description
      image
      username
      published
      createdAt
    }
  }
`

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`

const QUERY_FILE = gql`
  query files {
    files
  }
`

export {
  GET_USERS,
  GET_USER,
  LOGIN_USER,
  REGISTER_USER,
  EDIT_USER,
  DELETE_USER,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UPLOAD_FILE,
  QUERY_FILE
}
