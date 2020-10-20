// FIXME: Remove this later
// @ts-nocheck

import React, { useContext } from "react"
import { useHistory } from "react-router-dom"

import { AuthContext } from "../context"

// Fix this component, it errors on login

export const AuthRoute = (props) => {
  const { component: Component, ...rest } = props
  const authContext = useContext(AuthContext)
  const history = useHistory()

  if (authContext.authState?.userInfo?.username) {
    history.push("/")
  } else {
    return <Component {...rest} />
  }
}
