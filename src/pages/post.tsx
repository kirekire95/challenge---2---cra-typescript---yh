import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"

import { Layout } from "../components/Layout/Layout"
import { GET_POST } from "../queries"
import {
  Container,
  ContainerFlex,
  Error,
  Loading
} from "../components/UI Components"

const Post = () => {
  const { postId } = useParams<any>()
  const postQuery = useQuery(GET_POST, {
    variables: {
      postId
    }
  })

  const { loading, data, error } = postQuery
  console.log("DATA", data)

  function renderContent() {
    if (error) {
      return (
        <ContainerFlex>
          <Error message="Data could not be fetched..." />
        </ContainerFlex>
      )
    } else if (loading) {
      return (
        <ContainerFlex>
          <Loading />
        </ContainerFlex>
      )
    } else if (data) {
      return (
        <PostItemStyles>
          <h3>{data.getPost.id}</h3>
          <p>{data.getPost.title}</p>
          <p>{data.getPost.description}</p>
          <p>{data.getPost.category}</p>
          <small>{data.getPost.username}</small>
        </PostItemStyles>
      )
    }
  }

  return (
    <Layout>
      <Styled.h1>Single Post</Styled.h1>
      <Container>{renderContent()}</Container>
    </Layout>
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

export default Post
