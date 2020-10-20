/** @jsx jsx */
import { jsx } from "theme-ui"

// FIXME: Remove this later
// @ts-nocheck

import React, { useContext } from "react"
import { Styled } from "theme-ui"
import { useQuery } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { AuthContext } from "../context"
import { GET_USERS } from "../queries"
import {
  Loading,
  Error,
  Container,
  ContainerFlex,
  ContainerGrid
} from "../components/UI Components"
import Layout from "../components/Layout/Layout"
import { UserCard } from "../components/User"

const Home = () => {
  const authContext = useContext(AuthContext)
  console.log("home authContext", authContext)
  const { loading, error, data } = useQuery(GET_USERS, {
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
          <Styled.h1>Users</Styled.h1>
          <Styled.h2 sx={{ textAlign: "center" }}>
            Total Users: {data.getUsers.length}
          </Styled.h2>
          <ContainerGrid>
            {data.getUsers.length === 0 ? (
              <h2>There is nothing to see here...</h2>
            ) : (
              data.getUsers.map((item) => (
                <UserCard key={item.id} userData={item} />
              ))
            )}
          </ContainerGrid>
        </React.Fragment>
      )
      // FIXME: !authContext.authState?.userInfo?.username
    } else if (1 + 1 === 3) {
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

  // const ShowCreatePost = () => {
  //   if (authContext.authState?.userInfo?.username) {
  //     // return <PostAddForm />;
  //   } else {
  //     return null
  //   }
  // }

  return (
    <Layout>
      <Container>
        {/* {ShowCreatePost()} */}
        {renderContent()}
      </Container>
    </Layout>
  )
}

export default Home
