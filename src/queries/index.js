import { gql } from "@apollo/client"

const GET_USERS = gql`
  query {
    getUsers {
      _id
      username
      password
      email
      createdAt
    }
  }
`

const GET_USER = gql`
  query getUser($getUserUserId: ID!) {
    getUser(userId: $getUserUserId) {
      _id
      username
      email
      password
      createdAt
    }
  }
`

const LOGIN_USER = gql`
  mutation loginUser($loginUserPassword: String!, $loginUserUsername: String!) {
    loginUser(password: $loginUserPassword, username: $loginUserUsername) {
      userInfo {
        _id
        username
        password
        email
        createdAt
      }
      message
      token
      expiresAt
    }
  }
`

const REGISTER_USER = gql`
  mutation AddUserMutation(
    $addUserConfirmPassword: String!
    $addUserEmail: String!
    $addUserPassword: String!
    $addUserUsername: String!
  ) {
    addUser(
      confirmPassword: $addUserConfirmPassword
      email: $addUserEmail
      password: $addUserPassword
      username: $addUserUsername
    ) {
      userInfo {
        _id
        username
        password
        email
        createdAt
      }
      message
      token
      expiresAt
    }
  }
`

// need to update edit user to userInfo

const EDIT_USER = gql`
  mutation EditUserMutation(
    $editUserUserId: ID!
    $editUserUsername: String
    $editUserPassword: String
    $editUserEmail: String
    $editUserConfirmPassword: String
  ) {
    editUser(
      userId: $editUserUserId
      username: $editUserUsername
      password: $editUserPassword
      email: $editUserEmail
      confirmPassword: $editUserConfirmPassword
    ) {
      _id
      username
      email
      password
      createdAt
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($deleteUserUserId: ID!) {
    deleteUser(userId: $deleteUserUserId) {
      _id
      username
      password
      email
      createdAt
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

// File Upload, not implemented - yet

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
