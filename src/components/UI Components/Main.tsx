/** @jsx jsx */
import { jsx } from "theme-ui"

export const Main = (props: any) => {
  const { className, children } = props
  return (
    <main
      {...props}
      className={`${className}`}
      sx={{
        backgroundColor: "accent",
        minHeight: "calc(100vh - var(--navbar-height) - 129.6px)",
        margin: [1]
      }}
    >
      {children}
    </main>
  )
}
