import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Layout } from "../components/Layout/Layout"
import { usePost } from "../hooks"

const Post = () => {
  const { postId } = useParams<any>()
  const postQuery = usePost(postId)

  console.log("POSTQUERY", postQuery)

  function renderContent() {
    if (postQuery.isLoading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <article>
          <h3>{postQuery.data?.id}</h3>
          <h3>{postQuery.data?.title}</h3>
          <p>{postQuery.data?.body}</p>
          <small>{postQuery.data?.userId}</small>
        </article>
      )
    }
  }

  return <Layout>{renderContent()}</Layout>
}

export default Post
