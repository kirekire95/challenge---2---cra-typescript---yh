// FIXME: Remove this later
// @ts-nocheck

import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation } from "@apollo/client"

import { AuthContext } from "../context"
import { Button, displayNotification } from "../components/UI Components"
import { REGISTER_USER } from "../queries"
import Layout from "../components/Layout/Layout"

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
      props.navigate("/dashboard/")
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
      <StyledContainer>
        <h1>Register</h1>
        <StyledForm onSubmit={handleSubmit} noValidate>
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
          <div className="form-group">
            <RelativeIconContainer>
              <input
                type="checkbox"
                className={errors.isAdmin !== undefined ? "invalid" : null}
                id="admin"
                name="admin"
                placeholder="Admin..."
                value={values.isAdmin}
                onChange={handleChange}
                required="required"
                aria-label="Admin..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "envelope"]} />
            </RelativeIconContainer>
          </div>
          <Button full type="submit">
            {loading ? "Registering..." : "Register"}
          </Button>
        </StyledForm>
        {/* {displayNotification(errors, isSuccess, "Success")} */}
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.section`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 450px;
  margin: auto;
`

const StyledForm = styled.form`
  width: 100%;
  padding: 20px 0;
  .form-group input {
    font-size: inherit;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: var(--borderRadius-1);
    background-color: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.text};
    outline: 0;
    line-height: 3rem;
    padding: 0 45px 0 10px;
    box-shadow: var(--boxShadow-Even);
    -webkit-appearance: none;
    transition: all 0.2s ease;
  }
  .form-group .invalid {
    border-bottom: 3px solid #ff7730 !important;
  }
  .form-group input:valid {
    border-bottom: 3px solid #55c57a;
  }
  .form-group input:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
  .form-group input::placeholder {
    color: ${(props: any) => props.theme.colors.placeholder};
  }
  .form-group,
  button {
    margin-top: 15px;
  }
`

const RelativeIconContainer = styled.div`
  position: relative;
  .SVGIcon {
    width: 1.5rem;
  }
`

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
