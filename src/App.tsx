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
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute default component={NotFoundPage} />
            {/* <AuthRoute path="/dashboard/login" component={Login} />
            <AuthRoute path="/dashboard/register" component={Register} />
            <AuthRoute path="/profile/:user" component={Profile} /> */}
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  )
}

export default App
