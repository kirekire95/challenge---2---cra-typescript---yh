/** @jsx jsx */
import { useState } from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { useMutation, queryCache } from "react-query"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Modal from "react-modal"

import { Button, RelativeIconContainer } from "../UIComponents"

export const Upload = (props) => {
  const [previewSource, setPreviewSource] = useState()
  const [file, setFile] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  // const alert = useAlert()

  const { getPictureValue } = props

  console.log("UPLOAD PROPS", props)

  const [mutate, { isLoading }] = useMutation(uploadImage, {
    onSettled: () => queryCache.invalidateQueries("images")
  })

  const handleFileInputChange = (event) => {
    if (!modalOpen && event.target.value.length !== 0) {
      setModalOpen(true)
    }
    const file = event.target.files[0]
    if (file) {
      // const fsize = Math.round(file.size / 1024) //file size in kb
      // if (fsize >= 4096) {
      //   alert.show("File size too big. Please upload a file under 4mb.", {
      //     type: "danger",
      //   })
      //   event.target.value = null
      //   return
      // }
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    console.log("PreviewFIle", file)
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
    // Modal does not open again upon click... why?
    // event.target.value = null // Does this do anything? from James Quick
    event.preventDefault()
    // if (!previewSource) {
    //   return // What does this do?
    // }
    try {
      mutate(previewSource)
      setModalOpen(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage(base64EncodedImage) {
    console.log("base64EncodedImage", base64EncodedImage)
    try {
      // File is undefined?
      const uploadvalues = getPictureValue(file)
      console.log("UPLOADVALUES", uploadvalues)
      console.log("Upload Image State File", file)
      return file
    } catch (error) {
      console.log(error)
    }
  }

  // Modal stuff

  Modal.setAppElement("#__next")

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.58)",
      zIndex: "1"
    },
    content: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "rgb(255, 255, 255)",
      maxWidth: "540px",
      width: "70%"
    }
  }

  return (
    <>
      <label
        htmlFor="image-upload-input"
        className="custom-file-upload"
        sx={{
          marginY: [2]
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
          Ladda upp bild{" "}
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
      {previewSource && (
        // What is this div doing here?
        // Right now it is taking up space on opening the modal, maybe it should be absolute positioned, but I am not sure about that either
        <Modal
          isOpen={modalOpen}
          contentLabel="Ladda upp bild"
          style={customStyles}
        >
          <div sx={{ width: "300px", height: "300px", margin: "2rem auto" }}>
            <img
              src={previewSource}
              alt="chosen"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: (theme) => `${theme.radii[1]}`
              }}
            />
          </div>
          <div sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              full="true"
              disabled={!setPreviewSource}
              onClick={handleSubmitFile}
            >
              {isLoading ? "Laddar upp bild..." : "Ladda upp bild"}
            </Button>
            <Button
              full="true"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Avbryt
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}

export const UploadModal = () => {
  // const imageUploaded = async ({ imgId }) => {
  //   // setSavedUser((prevUser) => ({
  //   //     ...prevUser,
  //   //     imgId: imgId,
  //   // }));
  // }

  return <Upload />
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
