import React, { useState } from "react";
import styled from "styled-components";
import { Form, Alert } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import StyledButton from "../../src/components/Button";
import PageTemplate from "./PageTemplate";
import { Modal } from "react-bootstrap";
import { PopUpModal, usePopUpModal } from "../components/Modal";
import emailjs from "emailjs-com";

const sendEmailConfig = require("../../src/config/send-email-config.json");

const MainContainer = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: white;
    font-size: 20px;
    margin-top: 40px;
  }

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    color: #bbb;
    letter-spacing: 1px;
  }

  ul {
    margin-top: 30px;
    padding: 0px;
  }

  li {
    list-style-type: none;
    color: #bbb;
  }

  @media (max-width: 980px) {
    display: block;
    div {
      min-width: 300px;
    }
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [emailSentSuccessfully, setEmailSentSuccessfully] = useState(null);

  const { isShowing, toggle } = usePopUpModal();

  let templateParams = {
    sender_name: senderName,
    reply_to: senderEmail,
    sender_message: senderMessage,
  };

  const resetSenderStates = () => {
    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
  };

  const callSendEmail = () => {
    emailjs
      .send(
        sendEmailConfig.serviceID,
        sendEmailConfig.templateID,
        templateParams,
        sendEmailConfig.userID
      )
      .then(
        () => {
          setEmailSentSuccessfully(true);
          setFeedbackMessage(
            "Thanks! I've received your message, I'll get back you shortly!"
          );
          resetSenderStates();
          toggle();
        },
        () => {
          setEmailSentSuccessfully(false);
          setFeedbackMessage(
            "Oops! Not sure what happened there but your message wasn't sent!"
          );
          resetSenderStates();
          toggle();
        }
      );
  };

  return (
    <PageTemplate>
      <MainContainer>
        <div>
          <h3>Get in touch</h3>
          <p>You can also skip the formalities and send me a DM @ifedaviid</p>
          {emailSentSuccessfully && (
            <Alert variant={emailSentSuccessfully ? "success" : "danger"}>
              {feedbackMessage}
            </Alert>
          )}
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                value={senderName}
                onChange={(event) => setSenderName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email Address"
                value={senderEmail}
                onChange={(event) => setSenderEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                value={senderMessage}
                onChange={(event) => setSenderMessage(event.target.value)}
              />
            </Form.Group>
            <StyledButton text="Submit" onClick={toggle} />
          </Form>
        </div>
        <PopUpModal
          title="Just Confirming..."
          isShowing={isShowing}
          hide={toggle}
        >
          <Modal.Body>
            <p>Sure you're ready to send this?</p>
          </Modal.Body>
          <Modal.Footer>
            <StyledButton text="No" variant="outline-dark" />
            <StyledButton
              text="Yes, Send it!"
              variant="dark"
              onClick={() => callSendEmail()}
            />
          </Modal.Footer>
        </PopUpModal>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Contact);
