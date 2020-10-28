import { useQuery, queryCache } from "react-query"

export function usePosts() {
  return useQuery("posts", () => fetchPosts(), {
    onSuccess: () => console.log("Successfully got data with usePosts hook")
  })
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = response.json()
  return data
}
