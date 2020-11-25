import { useMutation } from "@apollo/client"

import { CREATE_POST } from "../queries"

export function useCreatePost(variables) {
  const [addPost] = useMutation(CREATE_POST, {
    variables,
    onCompleted: () => {
      console.log("Succeeded creating post")
    },
    onError: () => {
      console.log("Error while creating post")
    }
  })
  console.log("AddPost", addPost)
  return addPost
}
