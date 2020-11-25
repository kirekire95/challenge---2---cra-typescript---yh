/** @jsx jsx */
import { jsx } from "theme-ui"

export const Button = ({ variant = "primary", ...props }) => {
  return (
    <button
      {...props}
      sx={{
        display: "block",
        width: (props) => (props.full ? "100%" : "fit-content"),
        margin: (props) => (props.marginauto ? "auto" : "unset"),
        fontFamily: "inherit",
        fontSize: "calc(0.7rem + 1vmin)",
        lineHeight: "3rem",
        border: "3px solid transparent",
        borderRadius: (theme) => `${theme.radii[1]}`,
        cursor: "pointer",
        textDecoration: "none",
        backgroundColor: "background",
        color: "text",
        padding: "0 20px",
        outline: "0",
        boxShadow: (theme) => `${theme.shadows[2]}`,
        appearance: "none",
        transition: "var(--transitionPrimary)",
        "&:active": {
          transform: "translateY(3px)"
        },
        // "&:hover": {
        //   boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.5)"
        // },
        // "&:focus": {
        //   boxShadow: "0 0 0 3px rgba(255, 255, 255, 1)"
        // },
        variant: `buttons.${variant}`
      }}
    />
  )
}
