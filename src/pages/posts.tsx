import React from "react"

import { Layout } from "../components/Layout/Layout"
import { PostItem } from "../Post/PostItem"
import { usePosts } from "../hooks"

const Posts = () => {
  const postsQuery = usePosts()

  console.log("posts postsQuery", postsQuery)

  function renderContent() {
    if (postsQuery.isLoading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <section>
          {postsQuery.data?.map((post) => (
            <PostItem key={post.id} data={post} />
          ))}
        </section>
      )
    }
  }

  return <Layout>{renderContent()}</Layout>
}

export default Posts
