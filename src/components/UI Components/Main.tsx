/** @jsx jsx */
import { jsx } from "theme-ui"

export const Main = props => {
  return (
    <main
      {...props}
      className={`${props.className}`}
      sx={{
        backgroundColor: "accent",
        minHeight: "calc(100vh - var(--navbar-height) - var(--footer-height))",
        margin: [1],
      }}
    >
      {props.children}
    </main>
  )
}
