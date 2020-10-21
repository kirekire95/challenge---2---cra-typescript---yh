import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import { AuthProvider } from "./context"
import Layout from "./components/Layout/Layout"
import { Loading, Profile, ContainerFlex } from "./components/UI Components"
import { Home, NotFoundPage, Login, Register } from "./pages"
import { AuthRoute, PublicRoute } from "./routes"

const App = () => {
  return (
    <Router>
      <AuthProvider>
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
            <AuthRoute path="/dashboard/profile/:user" component={Profile} />
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute default component={NotFoundPage} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  )
}

export default App
