import { lazy } from "react"

const Home = lazy(() => import("./home"))
const NotFoundPage = lazy(() => import("./404"))
const Login = lazy(() => import("./login"))
const Register = lazy(() => import("./register"))

export { Home, NotFoundPage, Login, Register }
