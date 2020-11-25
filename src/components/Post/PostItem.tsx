import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"

export const PostItem = (props: any) => {
  const { postData: data } = props
  const { id, title, description, category, username } = data
  return (
    <PostItemStyles>
      <Link to={`posts/${id}`}>Go to post</Link>
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{description}</p>
      <p>{category}</p>
      <small>{username}</small>
    </PostItemStyles>
  )
}

const PostItemStyles = styled.article`
  padding: 0.8rem 1rem;

  box-shadow: ${(props: any) => props.theme.shadows[3]};
  border-radius: ${(props: any) => props.theme.radii[1]};
  background-color: ${(props: any) => props.theme.colors.background};
  color: ${(props: any) => props.theme.colors.text};
  p {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-top: 0.5rem;
  }
`
