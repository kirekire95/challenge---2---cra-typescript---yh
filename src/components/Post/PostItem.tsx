import React from "react"
import { Link } from "react-router-dom"

export const PostItem = (props: any) => {
  const { data } = props
  const { id, title, body, userId } = data
  return (
    <article>
      <Link to={`post/${id}`}>Go to post</Link>
      <h3>{id}</h3>
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{userId}</small>
    </article>
  )
}
