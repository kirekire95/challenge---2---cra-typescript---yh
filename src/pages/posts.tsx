/** @jsx jsx */
import { jsx } from "theme-ui"
import { useQuery } from "@apollo/client"
import { Styled } from "theme-ui"

import { Layout } from "../components/Layout/Layout"
import { GET_POSTS } from "../queries"
import {
  Container,
  ContainerFlex,
  ContainerGrid,
  Error,
  Loading
} from "../components/UI Components"
import { PostItem } from "../components/Post"

const Posts = () => {
  const allPostsQuery = useQuery(GET_POSTS)

  const { loading, data, error } = allPostsQuery
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
        <Container>
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
        </Container>
      )
    }
  }

  return <Layout>{renderContent()}</Layout>
}

export default Posts
