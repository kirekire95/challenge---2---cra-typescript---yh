// FIXME: Remove this later
// @ts-nocheck

import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation } from "@apollo/client"

import { AuthContext } from "../context"

import {
  Button,
  ContainerFlexMedium,
  ErrorContainer,
  Form,
  RelativeIconContainer
} from "../components/UI Components"
import { REGISTER_USER } from "../queries"
import Layout from "../components/Layout/Layout"
import { Styled } from "theme-ui"
import { useHistory } from "react-router"

const Register = (props: any) => {
  const authContext = useContext(AuthContext)
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    isAdmin: false
  })

  const history = useHistory()

  console.log("values", values)

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
    console.log(event.target.name)
  }

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    variables: values,
    onError(err) {
      console.log("ERROR", err)
      if (err.graphQLErrors[0].extensions.error) {
        setErrors(err.graphQLErrors[0].extensions.exception.error)
      } else if (err.graphQLErrors[0].extensions.errors) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors)
      } else {
        console.log("err - Something else happened", err.graphQLErrors[0])
      }
      console.log("err.graphQLErrors[0]", err.graphQLErrors[0])
    },
    update(_, result) {
      console.log("update result register", result)
      authContext.setAuthState(result.data.addUser)
      history.push(
        `/dashboard/profile/${result.data.addUser.userInfo.username}`
      )
    },
    onCompleted: () => {
      setErrors({})
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    addUser()
  }

  return (
    <Layout>
      <ContainerFlexMedium>
        <Styled.h1>Register</Styled.h1>
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
                autoComplete="new-password"
                aria-label="Password..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "lock"]} />
            </RelativeIconContainer>
          </div>
          <div className="form-group">
            <RelativeIconContainer>
              <input
                type="password"
                id="confirmPassword"
                className={
                  errors.password !== undefined ||
                  errors.confirmPassword !== undefined
                    ? "invalid"
                    : null
                }
                name="confirmPassword"
                placeholder="Confirm Password..."
                value={values.confirmPassword}
                onChange={handleChange}
                required="required"
                aria-label="Confirm password..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "lock"]} />
            </RelativeIconContainer>
          </div>
          <div className="form-group">
            <RelativeIconContainer>
              <input
                type="email"
                className={errors.email !== undefined ? "invalid" : null}
                id="email"
                name="email"
                placeholder="Email address..."
                value={values.email}
                onChange={handleChange}
                required="required"
                autoComplete="email"
                aria-label="Email address..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "envelope"]} />
            </RelativeIconContainer>
          </div>
          <Button full="full" type="submit">
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
        {Object.keys(errors).length > 0 && (
          <ErrorContainer>
            <ul>
              {Object.values(errors).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ErrorContainer>
        )}
      </ContainerFlexMedium>
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

export default Register
