import { lazy } from "react"

const Home = lazy(() => import("./home"))
const NotFoundPage = lazy(() => import("./404"))
const Login = lazy(() => import("./login"))
const Register = lazy(() => import("./register"))
const ExternalPosts = lazy(() => import("./externalposts"))
const ExternalPost = lazy(() => import("./externalpost"))
const Post = lazy(() => import("./post"))
const Posts = lazy(() => import("./posts"))
const ProfilePage = lazy(() => import("./dashboard/profile"))

export {
  Home,
  NotFoundPage,
  Login,
  Register,
  ExternalPosts,
  ExternalPost,
  Post,
  Posts,
  ProfilePage
}
