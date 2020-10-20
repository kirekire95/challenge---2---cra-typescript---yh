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
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
      email
      password
      createdAt
    }
  }
`

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $username: String!) {
    loginUser(password: $password, username: $username) {
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
    $confirmPassword: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      confirmPassword: $confirmPassword
      email: $email
      password: $password
      username: $username
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
    $userId: ID!
    $username: String
    $password: String
    $email: String
    $confirmPassword: String
  ) {
    editUser(
      userId: $userId
      username: $username
      password: $password
      email: $email
      confirmPassword: $confirmPassword
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
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
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
