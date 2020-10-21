import { useRef, useState } from "react"
import styled from "@emotion/styled"
import { Styled } from "theme-ui"
import { queryCache, useMutation } from "react-query"

import { useForm } from "../../utilities"
import { Button, DocumentTextIcon, displayNotification } from "../UIComponents"
import { Dropzone } from "."

export const AnnonsAddForm = () => {
  const [errors, setErrors] = useState({})
  const [pictureValue, setPictureValue] = useState([])
  const [uploadedImages, setUploadedImages] = useState([])
  const myForm = useRef(null)

  const [
    mutate,
    { data, isLoading, isError, isSuccess, status, error }
  ] = useMutation(postPicture, {
    onSuccess: () => {
      queryCache.invalidateQueries("images")
    },
    onError: (err, variables, previousValue) => {
      console.log(err)
      queryCache.setQueryData("images", previousValue)
    }
  })

  console.log("QUERY ERRROR", error)

  console.log("MUTATE isError", isError)
  console.log("MUTATE isSuccess", isSuccess)

  const { handleSubmit, values } = useForm(createProductCallback)

  function createProductCallback() {
    mutate()
  }

  function getPictureValue(picture) {
    if (picture) {
      setPictureValue(picture)
    }
  }

  async function postPicture() {
    try {
      const formData = new FormData(myForm.current)

      if (pictureValue) {
        for (let i = 0; i < pictureValue.length; i++) {
          const oneFile = pictureValue[i]

          formData.append("photos", oneFile, oneFile.name)
          setUploadedImages([...uploadedImages, oneFile])
        }
      }

      // Loop over the formData for debugging purposes
      for (const pair of formData.entries()) {
        console.log("Loop formdata", pair[0], pair[1])
      }

      const url =
        "http://s000522.intra.lund.se:81/api/plocket/CreateFurnitureAd"
      const requestOptions = {
        method: "POST",
        body: formData
      }

      const response = await fetch(url, requestOptions)

      const data = await response.json()
      console.log("AnnonsAddForm API DATA", data)

      if (response.ok) {
        setErrors({})
        return data
      } else if (!response.ok && data.errors) {
        setErrors(data.errors)
        console.log("STATE ERRORS", errors)
      } else if (!response.ok) {
        console.log("Something else went wrong")
      }
    } catch (error) {
      setErrors(error)
    }
  }

  console.log("AnnonsAddForm data", data)
  console.log("AnnonsAddForm Picture Value", pictureValue)

  return (
    <React.Fragment>
      <StyledForm ref={myForm} onSubmit={handleSubmit} noValidate>
        <Styled.h1>Skapa Annons</Styled.h1>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Titel..."
            name="title"
            // autoComplete="title-name"
            // onChange={handleChange}
            // value={values.title}
            defaultValue={values.title}
            required="required"
            className={errors.title ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <input
            type="text"
            placeholder="Kategori..."
            name="category"
            // autoComplete="title-name"
            // onChange={handleChange}
            // value={values.title}
            defaultValue={values.category}
            required="required"
            className={errors.category ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" />
        </RelativeIconContainer>
        <RelativeIconContainer>
          <textarea
            type="text"
            placeholder="Beskrivning..."
            name="description"
            // autoComplete="address-level2"
            // onChange={handleChange}
            // value={values.description}
            defaultValue={values.description}
            required="required"
            className={errors.description ? "invalid" : null}
          />
          <DocumentTextIcon className="hero-icon" style={{ height: "3rem" }} />
        </RelativeIconContainer>
        <Dropzone getPictureValue={getPictureValue} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
          <Button
            tabIndex="0"
            type="submit"
            style={{
              justifySelf: "flex-end"
            }}
          >
            {isLoading ? "Skapar annons..." : "Skapa annons"}
          </Button>
        </div>
      </StyledForm>
      {displayNotification(errors, isSuccess, "Annonsen har publicerats")}
    </React.Fragment>
  )
}

const StyledForm = styled.form`
  padding-bottom: ${({ theme }) => theme.space[4]};
  .hero-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-50%, 0%);
    vertical-align: unset;
    font-size: unset;
    height: 100%;
    color: ${({ theme }) => theme.colors.placeholder};
    width: 2rem;
  }

  input:not([type="file"]) {
    font-size: calc(0.65rem + 1vmin);
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: ${({ theme }) => theme.radii[1]};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: 0;
    line-height: 3rem;
    padding: 0 45px 0 10px;
    box-shadow: ${({ theme }) => theme.shadows[3]};
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
    border-radius: ${({ theme }) => theme.radii[1]};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: 0;
    line-height: 1.5rem;
    padding: 10px 45px 0 10px;
    box-shadow: ${({ theme }) => theme.shadows[3]};
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
    color: ${({ theme }) => theme.colors.placeholder};
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    display: inline-block;
    width: ${(props) => (props.full ? "100%" : "fit-content")};
    font-size: calc(0.7rem + 1vmin);
    line-height: 3rem;
    border: 3px solid transparent;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 2rem;
    border-radius: ${({ theme }) => theme.radii[1]};
    outline: 0;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    -webkit-appearance: none;
    transition: color, transform, box-shadow 0.35s ease;
    &:active {
      transform: translateY(3px);
    }
    /* &:hover {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5); 
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 1);
    } */
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

const StyledRelativeIconContainer = styled(RelativeIconContainer)`
  &:last-of-type {
    margin: unset;
  }
`
