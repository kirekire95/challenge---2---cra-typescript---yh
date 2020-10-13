import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Profile } from "./components/UI Components";

import { Home, NotFoundPage } from "./pages";
import { AuthRoute, PublicRoute } from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/profile/:user" component={Profile} />
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute default component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
