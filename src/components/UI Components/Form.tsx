import React from "react"
import styled from "@emotion/styled"

export const Form = (props: any) => {
  const { className, children } = props

  return (
    <StyledForm {...props} className={`${className}`}>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  max-width: inherit;
  textarea {
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: ${(props: any) => props.theme.radii[1]};
    background-color: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.text};
    outline: 0;
    padding: 10px 45px 0 10px;
    resize: none;
    box-shadow: ${(props: any) => props.theme.shadows[2]};
    -webkit-appearance: none;
    transition: var(--transitionPrimary);
  }

  input {
    font-family: inherit;
    font-size: inherit;
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
    box-shadow: ${(props: any) => props.theme.shadows[2]};
    -webkit-appearance: none;
    transition: var(--transitionPrimary);
  }

  .invalid {
    background-color: #fff6f6 !important;
    border-bottom: 3px solid #ff7730 !important;
  }

  input:valid {
    border-bottom: 3px solid #55c57a;
  }

  input:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${(props: any) => props.theme.colors.placeholder};
  }
`
