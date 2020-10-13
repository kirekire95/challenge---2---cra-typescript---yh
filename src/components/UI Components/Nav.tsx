import styled from "@emotion/styled";

import { ThemeProps } from "../../utilities/interface";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: ThemeProps) => props.theme.colors.background};
  color: ${(props: ThemeProps) => props.theme.colors.text};
  z-index: 1;
  height: var(--navbar-height);
  box-shadow: ${(props: ThemeProps) => props.theme.shadows[2]};
  user-select: none;

  li a {
    font-size: calc(0.7rem + 1vmin);
    text-decoration: none;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    display: inline-block;
  }

  li {
    padding: 1rem;
  }

  /* li a:hover {
    color: green;
  }

  li a:active {
    color: coral;
  } */

  /* Menu Navigation */

  .menuWrap {
    position: relative;
    top: 0;
    right: 0;
    z-index: 100;
  }

  .menuWrap .toggler {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 200;
    cursor: pointer;
    width: var(--navbar-checkbox);
    height: var(--navbar-checkbox);
    opacity: 0;
  }

  .menuWrap .hamburger {
    position: relative;
    top: 0;
    right: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hamburger Line */

  .menuWrap .hamburger > div {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: ${(props: ThemeProps) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease;
  }

  /* Top and bottom lines */

  .menuWrap .hamburger > div:before,
  .menuWrap .hamburger > div:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -9px;
    width: 100%;
    height: 3px;
    background-color: ${(props: ThemeProps) => props.theme.colors.text};
  }

  /* Moves line down */

  .menuWrap .hamburger > div:after {
    top: 9px;
  }

  /* Toggler Animate */

  .menuWrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }

  /* Turn lines into X */

  .menuWrap .toggler:checked + .hamburger > div:before,
  .menuWrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  /* Rotate on hover when checked */

  .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }

  /* Show Menu */

  .toggler:checked ~ .menu {
    visibility: visible;
  }

  .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
  }

  .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  /* Navigation Hamburger styling */

  .menuWrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menuWrap .menu > div {
    background-color: ${(props: ThemeProps) => props.theme.colors.muted};
    border-radius: 50%;
    width: 200vw;
    height: 200vh;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
  }

  .menuWrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .active {
    color: ${(props: ThemeProps) => props.theme.colors.activeLink};
  }

  .NavItems {
    display: flex;
    height: 100%;
    background-color: inherit;
  }
`;

export const NavModalUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: auto;
  padding: 0;
`;

export const NavUL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: auto;
  padding-left: 60px;

  @media only screen and (max-width: 990px) {
    display: none;
  }
`;
