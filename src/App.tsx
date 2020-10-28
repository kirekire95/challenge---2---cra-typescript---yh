import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { ReactQueryConfigProvider } from "react-query"

import { AuthProvider } from "./context"
import { Layout } from "./components/Layout/Layout"
import { Loading, ContainerFlex } from "./components/UI Components"
import {
  Home,
  NotFoundPage,
  Login,
  Register,
  Posts,
  Post,
  ProfilePage
} from "./pages"
import { AuthRoute, PublicRoute } from "./routes"

const App = () => {
  const queryConfig: any = {
    suspense: true
  }

  return (
    <Router>
      <AuthProvider>
        <ReactQueryConfigProvider config={queryConfig}>
          <Suspense
            fallback={
              <Layout>
                <ContainerFlex>
                  <Loading />
                </ContainerFlex>
              </Layout>
            }
          >
            <Switch>
              <AuthRoute
                path="/dashboard/profile/:user"
                component={ProfilePage}
              />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/register" component={Register} />
              <PublicRoute exact path="/posts" component={Posts} />
              <PublicRoute exact path="/post/:postId" component={Post} />
              <PublicRoute default component={NotFoundPage} />
            </Switch>
          </Suspense>
        </ReactQueryConfigProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
