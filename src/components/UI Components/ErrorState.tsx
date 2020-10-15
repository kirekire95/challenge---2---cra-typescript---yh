// FIXME: Remove this later
// @ts-nocheck

import React from "react"
import styled from "@emotion/styled"

export const ErrorContainer = (props: any) => {
  const { className } = props
  return <StyledErrorContainer {...props} className={`${className}`} />
}

const StyledErrorContainer = styled.div`
  width: 100%;
  color: #9f3a38;
  box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
  -webkit-appearance: none;
  border-radius: ${(props: any) => props.theme.radii[1]};
  background-color: #fff6f6;
  padding: 10px 0;
  ul {
    padding: ${(props: any) => props.theme.spaceY[8]};
  }
`

export const SuccessContainer = (props: any) => {
  const { className } = props
  return <StyledSuccessContainer {...props} className={`${className}`} />
}

const StyledSuccessContainer = styled.div`
  width: 100%;
  color: #fff;
  box-shadow: 0 0 0 1px hsl(141, 35%, 44%) inset, 0 0 0 0 transparent;
  -webkit-appearance: none;
  border-radius: ${(props: any) => props.theme.radii[1]};
  background-color: hsl(141, 53%, 53%);
  padding: 10px 0;
  ul {
    padding: ${(props: any) => props.theme.spaceY[8]};
  }
`

export function displayNotification(
  errors: any,
  isSuccess: any,
  successMessage: string
) {
  if (Object.keys(errors).length > 0) {
    return (
      <ErrorContainer>
        <ul>
          {Object.values(errors).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ErrorContainer>
    )
  } else if (Object.keys(errors).length === 0 && isSuccess === true) {
    return (
      <SuccessContainer>
        <ul>
          <li>{successMessage}</li>
        </ul>
      </SuccessContainer>
    )
  }
}
