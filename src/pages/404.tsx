import React from "react";
import { Link } from "react-router-dom";

import { ContainerFlex, Error, Loading, Nav } from "../components/UI Components";
import Layout from "../components/Layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <ContainerFlex>
      <h1>NOT FOUND - Client Route</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Back to home</Link>
    </ContainerFlex>
  </Layout>
);

export default NotFoundPage;
