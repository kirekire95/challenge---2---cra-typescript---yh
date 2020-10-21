import React, { useContext } from "react"
import { Styled } from "theme-ui"
// import styled from "@emotion/styled"
// import { Styled } from "theme-ui"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import {
//   Loading,
//   Error,
//   ContainerFlex,
//   ContainerGrid
// } from "../../components/UI Components"
import { Layout } from "../../components/Layout/Layout"
import { Container } from "../../components/UI Components"
import { AuthContext } from "../../context"
import { EditUser, CreateUser } from "../../components/Profile"

const ProfilePage = () => {
  const authContext = useContext<any>(AuthContext)
  return (
    <Layout>
      <Container>
        <Styled.h1>Hi from ProfilePage</Styled.h1>
        <Styled.h3>
          Welcome {authContext.authState?.userInfo?.username}!
        </Styled.h3>
        <div>
          <h3>{authContext.authState?.userInfo.username}</h3>
          <h3>{authContext.authState?.userInfo.email}</h3>
          <p>{authContext.authState?.userInfo.createdAt}</p>
          <p>{authContext.authState?.userInfo._id}</p>
        </div>
        {/* <EditUser /> */}
        <CreateUser />
      </Container>
    </Layout>
  )
}

export default ProfilePage
