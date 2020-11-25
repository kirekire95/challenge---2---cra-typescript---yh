/** @jsx jsx */
import { jsx } from "theme-ui"

// FIXME: Remove this later
// @ts-nocheck

import React, { useContext } from "react"
import { Styled } from "theme-ui"
import { useQuery } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { AuthContext } from "../context"
import { GET_POSTS } from "../queries"
import {
  Loading,
  Error,
  Container,
  ContainerFlex,
  ContainerGrid
} from "../components/UI Components"
import { Layout } from "../components/Layout/Layout"
import { PostAddForm, PostItem } from "../components/Post"

const Home = () => {
  const authContext = useContext<any>(AuthContext)
  console.log("home authContext", authContext)
  const { loading, error, data } = useQuery(GET_POSTS, {
    skip: !authContext.authState?.userInfo?.username
  })

  if (data) {
    console.log("Pages/Home", data)
  }

  console.log("Loading", loading)
  console.log("Error", error)

  const renderContent = () => {
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
    } else if (data && authContext.authState?.userInfo?.username) {
      return (
        <React.Fragment>
          <Styled.h1>Posts</Styled.h1>
          <Styled.h2 sx={{ textAlign: "center" }}>
            Total Posts: {data.getPosts.length}
          </Styled.h2>
          <ContainerGrid>
            {data.getPosts.length === 0 ? (
              <h2>There is nothing to see here...</h2>
            ) : (
              data.getPosts.map((item) => (
                <PostItem key={item.id} postData={item} />
              ))
            )}
          </ContainerGrid>
        </React.Fragment>
      )
    } else if (!authContext.authState?.userInfo?.username) {
      return (
        <ContainerFlex>
          <div>
            <Styled.h1>
              Unauthenticated! {""}
              <FontAwesomeIcon
                icon={["fas", "exclamation-triangle"]}
                style={{ color: "#f56565" }}
              />
            </Styled.h1>
          </div>
        </ContainerFlex>
      )
    } else {
      return <Styled.h1>Else</Styled.h1>
    }
  }

  const ShowCreatePost = () => {
    if (authContext.authState?.userInfo?.username) {
      return <PostAddForm />
    } else {
      return null
    }
  }

  return (
    <Layout>
      <Container>
        {ShowCreatePost()}
        {renderContent()}
      </Container>
    </Layout>
  )
}

export default Home
