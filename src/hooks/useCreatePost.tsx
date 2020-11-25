import { useMutation } from "@apollo/client"

import { CREATE_POST } from "../queries"

export function useCreatePost() {
  const [addPost] = useMutation(CREATE_POST, {
    variables: {
      title: "title from react",
      description: "description from react",
      category: "category from react"
    },
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
