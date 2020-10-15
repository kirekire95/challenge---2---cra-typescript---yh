// Not in use yet, implement backend
// FIXME: Remove this later
// @ts-nocheck
import React, { createContext, useEffect, useState } from "react"

const AuthContext = createContext({})
const { Provider } = AuthContext

const isBrowser = () => typeof window !== "undefined"

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState()

  useEffect(() => {
    if (isBrowser()) {
      const token = window.localStorage.getItem("token")
      const userInfo = window.localStorage.getItem("userInfo")
      const expiresAt = window.localStorage.getItem("expiresAt")

      setAuthState({
        token,
        expiresAt,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
      })
    }
  }, [])

  const setAuthInfo = (props) => {
    console.log("setAuthInfo", props)
    const { token, userInfo, expiresAt } = props
    window.localStorage.setItem("token", token)
    window.localStorage.setItem("userInfo", JSON.stringify(userInfo))
    window.localStorage.setItem("expiresAt", expiresAt)

    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }

  const logout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("userInfo")
    window.localStorage.removeItem("expiresAt")
    setAuthState({})
  }

  const isAuthenticated = () => {
    if (!authState) {
      return false
    }
    if (!authState?.token || !authState?.expiresAt) {
      return false
    }
    return new Date().getTime() / 1000 < authState?.expiresAt
  }

  const isAdmin = () => {
    return authState?.userInfo?.role === "admin"
  }

  console.log("HEEEEJ")

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo: any) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
        isAdmin
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
