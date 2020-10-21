// FIXME: Remove this later
// @ts-nocheck

import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { AuthContext } from "../context"

// Fix this component, it errors on login

export const AuthRoute = (props: any) => {
  const { component: Component, ...rest } = props
  const authContext = useContext(AuthContext)

  console.log("AUTHROUTE USERNAME", authContext.authState?.userInfo?.username)

  if (authContext.authState?.userInfo?.username) {
    return <Component {...rest} />
  } else {
    return <Redirect to="/" />
  }
}