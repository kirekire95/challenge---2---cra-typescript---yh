import React from "react"

export const PublicRoute = (props: any) => {
  const { component: Component, ...rest } = props
  return <Component {...rest} />
}
