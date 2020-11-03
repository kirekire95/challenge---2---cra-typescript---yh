// TODO: Remove this later
// @ts-nocheck

import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { AuthContext } from "../context"

// FIXME: This currently has an issue where authContext is taking some time to load

export const AuthRoute = (props: any) => {
  const { component: Component } = props
  const authContext = useContext(AuthContext)

  console.log("AUTHROUTE USERNAME", authContext.authState?.userInfo?.username)

  if (authContext.authState?.userInfo?.username) {
    return <Component {...props} />
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: props.location
          }
        }}
      />
    )
  }
}
