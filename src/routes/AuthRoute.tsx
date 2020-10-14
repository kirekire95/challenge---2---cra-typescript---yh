import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

export const AuthRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (isAuthenticated && !isLoading) {
    history.push("/");
  } else {
    return <Component {...rest} />;
  }
};
