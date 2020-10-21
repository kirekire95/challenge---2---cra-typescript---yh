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
import Layout from "../../components/Layout/Layout"
import { Container } from "../../components/UI Components"
import { AuthContext } from "../../context"

const ProfilePage = () => {
  const authContext = useContext<any>(AuthContext)
  return (
    <Layout>
      <Container>
        <h1>Hi from ProfilePage</h1>
        <Styled.h3>
          Welcome {authContext.authState?.userInfo?.username}!
        </Styled.h3>
      </Container>
    </Layout>
  )
}

export default ProfilePage
