import { useMutation } from "@apollo/client"

import { CREATE_POST } from "../queries"

export function useCreatePost(variables) {
  const addPost = useMutation(CREATE_POST, {
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted: (result) => console.log(result),
    onError: (err) => console.log(err)
  })
  console.log("Add post", addPost)
  return addPost
}
