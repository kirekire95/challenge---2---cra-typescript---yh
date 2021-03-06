import { useQuery, queryCache } from "react-query"

export async function fetchPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await response.json()
  return data
}

export function usePost(postId) {
  return useQuery(["posts", postId], () => fetchPost(postId), {
    initialData: () => {
      console.log("USEPOST QUERYCACHE", queryCache.getQueryData<any>("posts"))
      return queryCache
        .getQueryData<any>("posts")
        ?.find((post) => post.id === Number(postId))
    },
    initialStale: true
  })
}
