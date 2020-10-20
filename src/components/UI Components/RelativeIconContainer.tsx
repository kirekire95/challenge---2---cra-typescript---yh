import React from "react"
import styled from "@emotion/styled"

export const RelativeIconContainer = (props) => {
  const { className, children } = props
  return (
    <StyledRelativeIconContainer {...props} className={`${className}`}>
      {children}
    </StyledRelativeIconContainer>
  )
}

const StyledRelativeIconContainer = styled.div`
  position: relative;
  margin-top: 15px;
  .SVGIcon {
    width: 1.5rem;
  }
  &:last-of-type {
    margin-bottom: 15px;
  }
`
