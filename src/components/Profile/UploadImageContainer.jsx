import React from "react"
import styled from "@emotion/styled"

import { CameraIcon } from "../UI Components"

export const UploadImageContainer = () => {
  return (
    <UploadImageContainerStyles>
      <CameraIcon style={{ height: "3rem" }} />
    </UploadImageContainerStyles>
  )
}

const UploadImageContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  height: 100%;
`
