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
import Layout from "../components/Layout/Layout"

const Home = () => {
  const authContext = useContext(AuthContext)
  console.log("home authContext", authContext)
  const { loading, error, data } = useQuery(GET_POSTS, {
    skip: !authContext.authState?.userInfo?.username
  })
  console.log("Pages/Home", data)

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
          <h2>Your posts</h2>
          {/* <ContainerGrid>
            {data.getPosts.length === 0 ? (
              <h2>There is nothing to see here...</h2>
            ) : (
              data.getPosts.map((item) => (
                <PostCard key={item.id} post={item} />
              ))
            )}
          </ContainerGrid> */}
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
      // return <PostAddForm />;
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
