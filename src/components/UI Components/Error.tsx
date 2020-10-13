import React from "react"
import styled from "@emotion/styled"

const Error = props => {
  return (
    <StyledDiv>
      <h1>{props.message}</h1>
      <span className="emoticon" role="img" aria-label="Girl Emoticon">
        🤦‍♀️
      </span>
    </StyledDiv>
  )
}

Error.defaultProps = {
  message: "An error has occured...",
}

const StyledDiv = styled.div`
  text-align: center;
`

export default Error
