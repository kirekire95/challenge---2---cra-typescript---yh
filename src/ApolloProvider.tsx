import React from "react"
import App from "./App"
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = new HttpLink({
  uri: "sssss"
})

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken")
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
