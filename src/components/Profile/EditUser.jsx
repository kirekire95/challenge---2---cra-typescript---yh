import React, { useContext, useState } from "react"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"
import { useMutation } from "@apollo/client"

import { EDIT_USER } from "../../queries"
import { useForm } from "../../utilities"
import { Button, DocumentTextIcon, ErrorContainer } from "../UI Components"
import { UploadPicture } from "./UploadPicture"
import { AuthContext } from "../../context"

export const EditUser = () => {
  const [errors, setErrors] = useState({})
  const [pictureValue, setPictureValue] = useState([])
  // const [uploadedImages, setUploadedImages] = useState([])
  const authContext = useContext(AuthContext)

  const { handleSubmit, handleChange, values } = useForm(createProductCallback)

  console.log("THE THINGS", authContext.authState.userInfo)

  const [mutate, { data, loading, error }] = useMutation(EDIT_USER, {
    variables: {
      // ...authContext.authState.userInfo,
      userId: authContext.authState.userInfo._id,
      password: authContext.authState.userInfo.pass,
      email: values.email,
      username: values.username
    },
    onSuccess: () => {
      // queryCache.invalidateQueries("images")
    },
    onError: (err) => {
      if (err.graphQLErrors[0].extensions.error) {
        setErrors(err.graphQLErrors[0].extensions.exception.error)
      } else if (err.graphQLErrors[0].extensions.errors) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors)
      } else if (err.graphQLErrors[0].extensions.errors) {
        console.log("Hej", err.graphQLErrors[0].extensions.errors)
      } else {
        setErrors(err.graphQLErrors[0].message)
        console.log("err - Something else happened", err.graphQLErrors[0])
      }
      console.log("err.graphQLErrors[0]", err.graphQLErrors[0])
    }
  })

  console.log("MUTATE ERRROR", error)

  function createProductCallback() {
    mutate()
  }

  function getPictureValue(picture) {
    if (picture) {
      setPictureValue(picture)
    }
  }

  console.log("EditUser data", data)
  console.log("EditUser Picture Value", pictureValue)

  return (
    <React.Fragment>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <Styled.h1>Edit User</Styled.h1>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Username..."
            name="username"
            onChange={handleChange}
            value={values.username}
            required="required"
            className={errors.username ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
            value={values.email}
            required="required"
            className={errors.email ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        {/* We can add a bio here in GraphQL and use this later for a bio */}
        {/* <RelativeIconContainer>
          <textarea
            type="text"
            placeholder="Beskrivning..."
            name="description"
            // autoComplete="address-level2"
            // onChange={handleChange}
            // value={values.description}
            defaultValue={values.description}
            required="required"
            className={errors.description ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" style={{ height: "3rem" }} />
        </RelativeIconContainer> */}
        <UploadPicture getPictureValue={getPictureValue} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
          <Button
            tabIndex="0"
            type="submit"
            style={{
              justifySelf: "flex-end"
            }}
          >
            {loading ? "Skapar annons..." : "Skapa annons"}
          </Button>
        </div>
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
    </React.Fragment>
  )
}

const StyledForm = styled.form`
  padding-bottom: ${({ theme }) => theme.space[4]};
  .hero-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-50%, 0%);
    vertical-align: unset;
    font-size: unset;
    height: 100%;
    color: ${({ theme }) => theme.colors.placeholder};
    width: 2rem;
  }

  input:not([type="file"]) {
    font-size: calc(0.65rem + 1vmin);
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: ${({ theme }) => theme.radii[1]};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: 0;
    line-height: 3rem;
    padding: 0 45px 0 10px;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    -webkit-appearance: none;
    transition: color 0.2s ease;
  }

  textarea {
    font-size: calc(0.65rem + 1vmin);
    font-family: inherit;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 160px;
    border: 3px solid transparent;
    border-radius: ${({ theme }) => theme.radii[1]};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: 0;
    line-height: 1.5rem;
    padding: 10px 45px 0 10px;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    -webkit-appearance: none;
    transition: color 0.2s ease;
  }

  .invalid {
    background-color: #fff6f6 !important;
    border-bottom: 3px solid #ff7730 !important;
  }

  input:not([type="file"]):valid {
    border-bottom: 3px solid #55c57a;
  }

  input:not([type="file"]):focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  input:not([type="file"])::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    display: inline-block;
    width: ${(props) => (props.full ? "100%" : "fit-content")};
    font-size: calc(0.7rem + 1vmin);
    line-height: 3rem;
    border: 3px solid transparent;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 2rem;
    border-radius: ${({ theme }) => theme.radii[1]};
    outline: 0;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    -webkit-appearance: none;
    transition: color, transform, box-shadow 0.35s ease;
    &:active {
      transform: translateY(3px);
    }
    /* &:hover {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5); 
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 1);
    } */
  }
`

const RelativeIconContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  .svg-inline--fa.fa-w-12,
  .svg-inline--fa.fa-w-14,
  .svg-inline--fa.fa-w-16 {
    /* width: 1.6rem; */
    width: calc(0.9rem + 1vmin);
  }
`

// const StyledRelativeIconContainer = styled(RelativeIconContainer)`
//   &:last-of-type {
//     margin: unset;
//   }
// `
