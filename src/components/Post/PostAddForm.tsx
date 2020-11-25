import React from "react"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"

import { useForm } from "../../utilities"
import {
  Button,
  DocumentTextIcon,
  ErrorContainer,
  SuccessContainer
} from "../UI Components"
import { useCreatePost } from "../../hooks"

export const PostAddForm = () => {
  const createPost: any = useCreatePost()
  console.log("CreatePost", createPost.data)
  const { handleSubmit, values }: any = useForm(createPostCallback)

  function createPostCallback() {
    createPost()
  }

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
            placeholder="Titel..."
            name="title"
            defaultValue={values.title}
            required
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Kategori..."
            name="category"
            defaultValue={values.category}
            required
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <textarea
            placeholder="Beskrivning..."
            name="description"
            defaultValue={values.description}
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
            {createPost.isLoading ? "Skapar annons..." : "Skapa annons"}
          </Button>
        </div>
      </StyledForm>
      {/* {displayNotification(createPost?.errors)} */}
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

  input:not([type="file"])::placeholder {
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
