import React from "react"
import ReactDOM from "react-dom"

import { TheApolloProvider } from "./ApolloProvider"

ReactDOM.render(
  <React.StrictMode>
    <TheApolloProvider />
  </React.StrictMode>,
  document.getElementById("root")
)
