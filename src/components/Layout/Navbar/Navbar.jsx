import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { useColorMode } from "theme-ui"

import { AuthContext } from "../../../context"
import { ToggleThemeMode } from "../../../utilities"
import { NavigationLinks, ProfileLinks } from "../../../constants"
import {
  Nav,
  NavUL,
  NavModalUL,
  SVGIcon,
  Profile,
  ProfileUL
  // Loading
} from "../../UI Components"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

  const authContext = useContext(AuthContext)

  const modes = ["light", "dark", "colorful"]

  function cycleColorMode() {
    const currentTheme = modes.indexOf(colorMode)
    const nextTheme = (currentTheme + 1) % modes.length
    setColorMode(modes[nextTheme])
  }

  function toggleNav() {
    setNavbarOpen((navbarOpen) => !navbarOpen)
  }

  function toggleProfile() {
    setProfileOpen((profileOpen) => !profileOpen)
  }

  function logoutHandler() {
    authContext.logout()
    toggleProfile()
  }

  function loggedInUser() {
    if (authContext?.authState?.userInfo?.username) {
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
              <NavLink
                activeClassName="active"
                to={`/dashboard/profile/${authContext.authState?.userInfo?.username}`}
              >
                {authContext.authState?.userInfo?.username}
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/" onClick={logoutHandler}>
                Logout
              </NavLink>
            </li>
          </ProfileUL>
        </React.Fragment>
      )
    } else if (!authContext.authState?.userInfo?.username) {
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
            {ProfileLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink activeClassName="active" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              )
            })}
          </ProfileUL>
        </React.Fragment>
      )
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
                  )
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
          )
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
  )
}

export default Navbar
