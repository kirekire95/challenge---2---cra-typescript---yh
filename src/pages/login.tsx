import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation } from "@apollo/client"

import { AuthContext } from "../context"
import { PrimaryButton, ErrorContainer } from "../components/UI Components"
import { useForm } from "../utilities"
import { LOGIN_USER } from "../queries"
import Layout from "../components/Layout/Layout"

const Login = (props: any) => {
  const authContext = useContext(AuthContext)
  const [errors, setErrors] = useState({})

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
      console.log("update result login", result)
      authContext.setAuthState(result.data.loginUser)
      props.navigate("/dashboard")
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
      <StyledContainer>
        <h1>Login</h1>
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
                autoComplete="current-password"
                aria-label="Password..."
              />
              <StyledSVGIcon className="SVGIcon" icon={["fas", "lock"]} />
            </RelativeIconContainer>
          </div>
          <PrimaryButton full type="submit">
            {loading ? "Logging in..." : "Login"}
          </PrimaryButton>
        </StyledForm>
        {Object.keys(errors).length > 0 && (
          <ErrorContainer>
            <ul>
              {Object.values(errors).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ErrorContainer>
        )}
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

export default Login
