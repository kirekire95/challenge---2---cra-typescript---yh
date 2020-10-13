import React from "react";
import { ThemeProvider as StyledThemeProvider, Styled } from "theme-ui";

import { GlobalStyle } from "../../styles";
import Navbar from "./Navbar/Navbar";
import { Main } from "../UI Components";
import Footer from "./Footer/Footer";
import theme from "../../theme/theme";

import { config, library } from "@fortawesome/fontawesome-svg-core";

import { faAdjust, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

library.add(
  faAdjust,
  faCheckCircle,
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faGithubSquare
);

const Layout: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <Styled.root>
        <GlobalStyle />
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </Styled.root>
    </StyledThemeProvider>
  );
};

export default Layout;
