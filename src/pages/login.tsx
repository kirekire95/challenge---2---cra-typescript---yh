// FIXME: Remove this later
// @ts-nocheck

import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation } from "@apollo/client"

import { AuthContext } from "../context"

import {
  Button,
  ContainerSmall,
  Form,
  RelativeIconContainer,
  ErrorContainer
} from "../components/UI Components"
import { useForm } from "../utilities"
import { LOGIN_USER } from "../queries"
import Layout from "../components/Layout/Layout"
import { Styled } from "theme-ui"
import { useHistory } from "react-router"

const Login = (props: any) => {
  const authContext = useContext(AuthContext)
  const [errors, setErrors] = useState({})
  const history = useHistory()

  const { handleChange, handleSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: ""
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    variables: values,
    onError(err) {
      if (err) {
        console.log(err)
      }

      if (err.graphQLErrors[0].extensions.error) {
        setErrors(err.graphQLErrors[0].extensions.exception.error)
      } else if (err.graphQLErrors[0].extensions.errors) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors)
      } else if (err.graphQLErrors[0].extensions.errors) {
        console.log("Hej", err.graphQLErrors[0].extensions.errors)
      } else {
        console.log("err - Something else happened", err.graphQLErrors[0])
      }
      console.log("err.graphQLErrors[0]", err.graphQLErrors[0])
    },
    update(_, result) {
      /* Memory leak happens here maybe? */
      console.log("update result login", result)
      authContext.setAuthState(result.data.loginUser)
      history.push(
        `/dashboard/profile/${result.data.loginUser.userInfo.username}`
      )
    },
    onCompleted: () => {
      setErrors({})
    }
  })

  function loginUserCallback() {
    loginUser()
  }

  console.log("ERRORSSS", errors)

  return (
    <Layout>
      <ContainerSmall>
        <Styled.h1>Login</Styled.h1>
        <Form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <RelativeIconContainer>
              <input
                type="text"
                id="username"
                className={errors.username !== undefined ? "invalid" : null}
                name="username"
                placeholder="Username..."
                value={values.username}
                onChange={handleChange}
                required="required"
                autoFocus
                autoComplete="username"
                aria-label="Username..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "user"]} />
            </RelativeIconContainer>
          </div>
          <div className="form-group">
            <RelativeIconContainer>
              <input
                type="password"
                id="password"
                className={errors.password !== undefined ? "invalid" : null}
                name="password"
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                required="required"
                autoComplete="current-password"
                aria-label="Password..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "lock"]} />
            </RelativeIconContainer>
          </div>
          <Button full="full" type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
          {Object.keys(errors).length > 0 && (
            <ErrorContainer>
              <ul>
                {Object.values(errors).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ErrorContainer>
          )}
        </Form>
      </ContainerSmall>
    </Layout>
  )
}

const StyledSVGIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 0%);
  color: ${(props: any) => props.theme.colors.placeholder};
  height: 100%;
  font-size: 1.8rem;
  width: 2rem;
`

export default Login
