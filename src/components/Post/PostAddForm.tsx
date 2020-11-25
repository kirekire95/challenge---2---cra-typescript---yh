import React, { useState } from "react"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"
import { useMutation } from "@apollo/client"

import { useForm } from "../../utilities"
import {
  Button,
  DocumentTextIcon,
  ErrorContainer,
  SuccessContainer
} from "../UI Components"
import { CREATE_POST, GET_POSTS } from "../../queries"

export const PostAddForm = () => {
  const [errors, setErrors] = useState({})
  const { handleSubmit, values, handleChange }: any = useForm(
    createPostCallback
  )

  const [createPost, createPostInfo]: any = useMutation(CREATE_POST, {
    variables: values,
    notifyOnNetworkStatusChange: true,
    onCompleted: (result) => {
      setErrors({})
      console.log(result)
    },
    refetchQueries: [{ query: GET_POSTS }],
    onError(err: any) {
      if (err.message) {
        setErrors(err.message)
      }
    }
  })

  console.log("CreatePost Info", createPostInfo)
  console.log("CreatePost data", createPost.data)
  console.log("values", values)

  function createPostCallback() {
    createPost()
  }

  console.log("SET ERRORS", errors)

  function displayNotification(input: any) {
    if (Object.keys(input).length > 0) {
      return (
        <ErrorContainer>
          <ul>
            {Object.values(input).map((item: any) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ErrorContainer>
      )
    } else if (Object.keys(input).length === 0 && createPost.data) {
      return (
        <SuccessContainer>
          <ul>
            <li>Success</li>
          </ul>
        </SuccessContainer>
      )
    }
  }

  return (
    <React.Fragment>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <Styled.h1>Skapa Annons</Styled.h1>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={values.title}
            onChange={handleChange}
            required
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Category..."
            name="category"
            value={values.category}
            onChange={handleChange}
            required
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <textarea
            placeholder="Description..."
            name="description"
            value={values.description}
            onChange={handleChange}
            required
          />
          <DocumentTextIcon className="hero-icon" style={{ height: "3rem" }} />
        </RelativeIconContainer>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
          <Button
            tabIndex="0"
            type="submit"
            style={{
              justifySelf: "flex-end"
            }}
          >
            {createPostInfo.loading ? "Skapar annons..." : "Skapa annons"}
          </Button>
        </div>
      </StyledForm>
      {displayNotification(errors)}
    </React.Fragment>
  )
}

const StyledForm = styled.form`
  padding-bottom: ${(props: any) => props.theme.space[4]};
  .hero-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-50%, 0%);
    vertical-align: unset;
    font-size: unset;
    height: 100%;
    color: ${(props: any) => props.theme.colors.placeholder};
    width: 2rem;
  }

  input:not([type="file"]) {
    font-size: calc(0.65rem + 1vmin);
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: ${(props: any) => props.theme.radii[1]};
    background-color: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.text};
    outline: 0;
    line-height: 3rem;
    padding: 0 45px 0 10px;
    box-shadow: ${(props: any) => props.theme.shadows[3]};
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
    border-radius: ${(props: any) => props.theme.radii[1]};
    background-color: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.text};
    outline: 0;
    line-height: 1.5rem;
    padding: 10px 45px 0 10px;
    box-shadow: ${(props: any) => props.theme.shadows[3]};
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

  input:not([type="file"])::placeholder,
  textarea::placeholder {
    color: ${(props: any) => props.theme.colors.placeholder};
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
