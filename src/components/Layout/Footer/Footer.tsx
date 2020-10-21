/** @jsx jsx */
import { FunctionComponent } from "react"
import { jsx, SxStyleProp } from "theme-ui"

import { SocialIcons } from "../../../constants"

interface customSXProps {
  sx?: SxStyleProp
}

const Footer: FunctionComponent<customSXProps> = (props) => {
  const { sx } = props
  return (
    <footer
      sx={{
        minHeight: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background",
        padding: [4],
        boxShadow: [2],
        ...sx
      }}
    >
      <ul
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          minHeight: "var(--footer-height)",
          padding: "0"
        }}
      >
        {SocialIcons.map((item, index) => {
          return (
            <li key={index}>
              <a
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "2.75rem",
                  margin: "0 30px",
                  transition: "var(--transitionPrimary)",
                  "&:hover": {
                    color: "#ccc"
                  }
                }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          )
        })}
      </ul>
      <p
        sx={{
          textAlign: "center",
          fontSize: "inherit"
        }}
      >
        Copyright &copy; Erik Claesson {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
