import React, { useState } from "react"

import styled from "@emotion/styled"
import { useMutation } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button, RelativeIconContainer } from "../UI Components"
import { ModalComponent } from "../../utilities"
import { UploadImageContainer } from "./UploadImageContainer"
import { UPLOAD_FILE } from "../../queries"

export const UploadPicture = (props) => {
  const [previewSource, setPreviewSource] = useState()
  const [file, setFile] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)

  const { getPictureValue } = props

  console.log("UPLOAD PROPS", props)

  const [uploadFile, { loading }] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log("UPLOAD_FILE onComplete data", data)
  })

  const handleFileInputChange = (event) => {
    if (!modalOpen && event.target.value.length !== 0) {
      setModalOpen(true)
    }
    const file = event.target.files[0]
    if (file) {
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    console.log("PreviewFile", file)
    reader.readAsDataURL(file)
    // console.log('Reader File', reader.readAsDataURL(file))
    reader.onload = () => {
      setPreviewSource(reader.result)
    }
    setFile(file)
    console.log("state file", file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
    reader.onerror = () => {
      console.error("Reader Error!")
    }
  }

  console.log("Modal Open?", modalOpen)

  const handleSubmitFile = (event) => {
    event.preventDefault()
    try {
      setModalOpen(false)
      uploadFile({
        variables: {
          file
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  function displayThumbnail() {
    if (!file) {
      return <UploadImageContainer />
    } else if (previewSource) {
      return (
        <ModalComponent isOpen={modalOpen} contentLabel="Upload a picture">
          <div style={{ width: "300px", height: "300px", margin: "2rem auto" }}>
            <img
              src={previewSource}
              alt="chosen"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: (theme) => `${theme.radii[1]}`
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              full="true"
              disabled={!setPreviewSource}
              onClick={handleSubmitFile}
            >
              {loading ? "Laddar upp bild..." : "Ladda upp bild"}
            </Button>
            <Button
              full="true"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Avbryt
            </Button>
          </div>
        </ModalComponent>
      )
    }
  }

  return (
    <>
      <label
        htmlFor="image-upload-input"
        className="custom-file-upload"
        style={{
          margin: "2rem 0"
        }}
      >
        <StyledRelativeIconContainer>
          <input
            id="image-upload-input"
            type="file"
            name="upload"
            onChange={handleFileInputChange}
            accept="image/x-png,image/gif,image/jpeg"
            aria-label="Bild uppladdning..."
          />
          Upload picture{" "}
          <StyledSVGIconImage
            icon={["fas", "image"]}
            noabsolute="true"
            notop="true"
            noright="true"
            notransform="true"
            verticalalign="true"
          />
        </StyledRelativeIconContainer>
      </label>
      {displayThumbnail()}
    </>
  )
}

const StyledRelativeIconContainer = styled(RelativeIconContainer)`
  &:last-of-type {
    margin: unset;
  }
`

const StyledSVGIconImage = styled(FontAwesomeIcon)`
  position: ${(props) => (props.noabsolute ? "unset" : "absolute")};
  top: ${(props) => (props.notop ? "unset" : "0")};
  right: ${(props) => (props.noright ? "unset" : "0")};
  transform: ${(props) =>
    props.notransform ? "unset" : "translate(-50%, 0%)"};
  vertical-align: ${(props) => (props.verticalalign ? "middle" : "unset")};
  font-size: unset;
  height: 100%;
  color: ${({ theme }) => theme.colors.placeholder};
`
