// import { useQuery, queryCache } from "react-query"
// TODO: Figure out what to do with queryCache
import { useQuery } from "react-query"

export function usePosts() {
  return useQuery("posts", () => fetchPosts(), {
    onSuccess: () =>
      console.log("Successfully fetched data with the usePosts hook")
  })
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = response.json()
  return data
}
