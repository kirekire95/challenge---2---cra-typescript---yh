import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useColorMode } from "theme-ui";
import { useAuth0 } from "@auth0/auth0-react";

import { ToggleThemeMode } from "../../../utilities";
import { NavigationLinks } from "../../../constants";
import {
  Nav,
  NavUL,
  NavModalUL,
  SVGIcon,
  Profile,
  ProfileUL,
  Loading,
} from "../../UI Components";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const {
    error,
    isAuthenticated,
    isLoading,
    user,
    loginWithPopup,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
  } = useAuth0();

  const modes = ["light", "dark", "colorful"];

  function cycleColorMode() {
    const currentTheme = modes.indexOf(colorMode);
    const nextTheme = (currentTheme + 1) % modes.length;
    setColorMode(modes[nextTheme]);
  }

  function toggleNav() {
    setNavbarOpen((navbarOpen) => !navbarOpen);
  }

  function toggleProfile() {
    setProfileOpen((profileOpen) => !profileOpen);
  }

  function logoutHandler() {
    logout({ returnTo: window.location.origin });
    toggleProfile();
  }

  function loggedInUser() {
    if (isAuthenticated && !isLoading && user) {
      return (
        <React.Fragment>
          <Profile
            onClick={toggleProfile}
            aria-checked={profileOpen}
            aria-label="Profile"
          >
            <figure>
              <img src={user.picture} alt={user.name} />
            </figure>
          </Profile>
          <ProfileUL className={profileOpen ? "open" : "closed"}>
            {/* We could have /dashboard/profile/ID here, or do we even need that ID? Looks good I guess */}
            <li>
              <NavLink
                activeClassName="active"
                to={`/dashboard/profile/${user.email}`}
              >
                {user.email}
              </NavLink>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ProfileUL>
        </React.Fragment>
      );
    } else if (!isAuthenticated && !isLoading) {
      return (
        <React.Fragment>
          <Profile
            onClick={toggleProfile}
            aria-checked={profileOpen}
            aria-label="Profile"
          >
            <figure>
              <SVGIcon icon={["fas", "user"]} />
            </figure>
          </Profile>
          <ProfileUL className={profileOpen ? "open" : "closed"}>
            <li>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          </ProfileUL>
        </React.Fragment>
      );
    } else if (isLoading) {
      return (
        <React.Fragment>
          <Profile
            onClick={toggleProfile}
            aria-checked={profileOpen}
            aria-label="Profile"
          >
            <figure>
              <SVGIcon icon={["fas", "user"]} />
            </figure>
          </Profile>
          <ProfileUL className={profileOpen ? "open" : "closed"}>
            <li>
              <Loading />
            </li>
          </ProfileUL>
        </React.Fragment>
      );
    }
  }

  return (
    <Nav>
      <div className="menuWrap">
        <input
          type="checkbox"
          className="toggler"
          onClick={toggleNav}
          aria-checked={navbarOpen}
          aria-label="Navigation"
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <NavModalUL>
                {NavigationLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <NavLink exact activeClassName="active" to={link.path}>
                        {link.text}
                      </NavLink>
                    </li>
                  );
                })}
              </NavModalUL>
            </div>
          </div>
        </div>
      </div>
      <NavUL>
        {NavigationLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink exact activeClassName="active" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </NavUL>
      <div className="NavItems">
        <ToggleThemeMode onClick={cycleColorMode}>
          <SVGIcon
            icon={["fas", "adjust"]}
            aria-label={`${colorMode} mode`}
            title={`${colorMode} mode`}
          />
        </ToggleThemeMode>
        {loggedInUser()}
      </div>
    </Nav>
  );
};

export default Navbar;
