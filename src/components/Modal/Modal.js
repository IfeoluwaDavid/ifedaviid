import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ModalBackdropStyle.css";

const StyledModal = styled(Modal)`
  height: 70%;
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: #343434;
  margin: 10px;
  transform: scale(1.5);
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const PopUpModal = ({ isShowing, hide, children, title }) => {
  if (!isShowing) return null;

  return (
    <StyledModal
      show={isShowing}
      onHide={hide}
      backdropClassName="custom-back-drop"
      centered
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <CloseIcon icon={faTimes} onClick={hide} />
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </StyledModal>
  );
};

export default PopUpModal;
