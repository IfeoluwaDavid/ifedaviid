import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledModal = styled(Modal.Dialog)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: #343434;
  margin: 10px;
  transform: scale(1.5);
  @media (max-width: 980px) {
    margin-left: 50px;
  }
`;

const modalRoot = document.getElementById("modal-root");

const PopUpModal = ({ isShowing, hide, children, title }) => {
  if (!isShowing) return null;

  console.log("ideyhere");

  return ReactDOM.createPortal(
    <Background>
      <StyledModal>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <CloseIcon icon={faTimes} onClick={hide} />
        </Modal.Header>
        {children}
      </StyledModal>
    </Background>,
    modalRoot
  );
};

export default PopUpModal;
