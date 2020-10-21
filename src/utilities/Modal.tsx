import React from "react"
import Modal from "react-modal"

export const ModalComponent = (props: any) => {
  const { children, className } = props

  Modal.setAppElement("#root")

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
      width: "70%",
      borderRadius: "3px"
    }
  }

  return (
    <Modal {...props} className={`${className}`} style={customStyles}>
      {children}
    </Modal>
  )
}
