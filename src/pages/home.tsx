/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";

import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Styled.h1>Hi from home</Styled.h1>
      <h2
        sx={{
          color: "primary",
        }}
      >
        Hiiiii
      </h2>
    </Layout>
  );
};

export default Home;
