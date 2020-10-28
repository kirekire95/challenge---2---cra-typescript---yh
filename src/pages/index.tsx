import { lazy } from "react"

const Home = lazy(() => import("./home"))
const NotFoundPage = lazy(() => import("./404"))
const Login = lazy(() => import("./login"))
const Register = lazy(() => import("./register"))
const Posts = lazy(() => import("./posts"))
const Post = lazy(() => import("./post"))
const ProfilePage = lazy(() => import("./dashboard/profile"))

export { Home, NotFoundPage, Login, Register, Posts, Post, ProfilePage }
