import React from "react"
import { Route } from "react-router-dom"

export const PublicRoute = (props: any) => {
  const { component: Component, ...rest } = props
  return (
    <Route {...rest}>
      <Component {...props} />
    </Route>
  )
}
