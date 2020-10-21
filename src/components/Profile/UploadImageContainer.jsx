import styled from "@emotion/styled"

import { CameraIcon } from "../UIComponents"

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
