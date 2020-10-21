import React from "react"
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

import App from "./App"

const httpLink = new HttpLink({
  uri: "https://reactsecurity---backend.herokuapp.com/api/graphql"
})

const authLink = setContext(() => {
  const token = localStorage.getItem("token")
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

export const TheApolloProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
