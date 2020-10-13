import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (isAuthenticated && !isLoading) {
    return history.push("/");
  } else {
    return (
      <Route>
        <Component {...rest} />
      </Route>
    );
  }
};
