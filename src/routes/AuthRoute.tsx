import React, { useContext } from "react"
import { useHistory } from "react-router-dom"

import { AuthContext } from "../context"

export const AuthRoute = (props: any) => {
  const { component: Component, ...rest } = props
  const authContext = useContext(AuthContext)
  const history = useHistory()

  if (authContext.authState?.userInfo?.username) {
    history.push("/")
  } else {
    return <Component {...rest} />
  }
}
