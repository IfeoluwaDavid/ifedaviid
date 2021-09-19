import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Alert, Modal } from "react-bootstrap";
import StyledButton from "../../src/components/Button";
import { PopUpModal, usePopUpModal } from "../components/Modal";
import "./Contact.css";

const sendEmailConfig = require("../../src/config/send-ref-config.json");

const RecommendationForm = ({ setShowRecommendationForm }) => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
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
            "Thanks for the reference! Hoping it was a positive one. :)"
          );
          setShowFeedbackMessage(true);
          resetSenderStates();
          toggle();
        },
        () => {
          setEmailSentSuccessfully(false);
          setFeedbackMessage(
            "Oops! Not sure what happened there but your reference wasn't sent!"
          );
          resetSenderStates();
          toggle();
        }
      );
  };

  return (
    <div className="contact-page-content">
      <div className="contact-page-form-container">
        <h3 className="contact-page-header">Leave a Reference</h3>
        <p className="contact-page-subheader">
          <strong>Note:</strong> I'll only be showcasing references with a
          professional background.
        </p>
        {showFeedbackMessage && (
          <Alert
            onClose={() => setShowFeedbackMessage(false)}
            dismissible
            variant={emailSentSuccessfully ? "success" : "danger"}
          >
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
          <StyledButton
            text="Return to References page"
            variant="link"
            style={{ color: "#ffffff" }}
            onClick={() => setShowRecommendationForm(false)}
          />
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
          <StyledButton text="No" variant="outline-dark" onClick={toggle} />
          <StyledButton
            text="Yes, Send it!"
            variant="dark"
            onClick={() => callSendEmail()}
          />
        </Modal.Footer>
      </PopUpModal>
    </div>
  );
};

export default RecommendationForm;
