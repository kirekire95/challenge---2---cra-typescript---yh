import React from "react";
import { Global, css } from "@emotion/core";
import { useThemeUI } from "theme-ui";

export const GlobalStyle = () => {
  const themeContext = useThemeUI();
  return (
    <Global
      styles={css`
        :root {
          --navbar-height: 60px;
          --navbar-checkbox: 60px;
          --footer-height: 60px;
          --highlight-color: slateblue;
          --transitionPrimary: all 0.2s ease;
        }

        * {
          margin: 0;
          box-sizing: border-box;
        }

        ::selection {
          background: var(--highlight-color);
        }

        html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          scroll-behavior: smooth;
        }

        body:not(ul) {
          padding: 0;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          word-break: break-word;
          text-rendering: optimizeLegibility;
          margin: auto;
        }

        // Custom Scroll

        body::-webkit-scrollbar,
        pre::-webkit-scrollbar {
          background-color: rgba(8, 8, 8, 0.8);
          width: 12px;
        }

        body::-webkit-scrollbar-thumb,
        pre::-webkit-scrollbar-thumb {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: ${themeContext?.theme?.colors?.background};
          border-radius: ${themeContext?.theme?.radii?.[2]};
        }

        body::-webkit-scrollbar-track,
        pre::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: ${themeContext?.theme?.colors?.third};
        }
      `}
    />
  );
};
