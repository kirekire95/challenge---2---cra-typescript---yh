import React from "react";
import { Route } from "react-router-dom";

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route>
      <Component {...rest} />
    </Route>
  );
};
