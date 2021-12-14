import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { Form, Alert, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import greenCheckMarkIcon from "../../src/icons/green-checkmark.png";
import StyledButton from "../../src/components/Button";
import PageTemplate from "./PageTemplate";
import { PopUpModal, usePopUpModal } from "../components/Modal";
import { hasMissingValues } from "../utilities/helpers";
import "./Contact.css";

const sendEmailConfig = require("../../src/config/send-email-config.json");

const FormGroup = styled(Form.Group)`
  margin: 1rem 0rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { isShowing, toggle } = usePopUpModal();

  const contactSchema = Yup.object().shape({
    sender_name: Yup.string()
      .min(2, "Your name seems a little too short!")
      .max(50, "Don't you think this is too long?")
      .required("I'll need your full name please.."),
    sender_message: Yup.string()
      .min(10, "Come on, you can say more..")
      .max(
        1000,
        "Love the energy, but I think that's a little too much for anyone to read!"
      )
      .required("This field is required"),
    reply_to: Yup.string()
      .email("How about a real email?")
      .required("I'll need your email.."),
  });

  const renderErrorMessage = (message) => {
    return <p className="contact-error-message">{message}</p>;
  };

  const callSendEmail = () => {
    emailjs
      .send(
        sendEmailConfig.serviceID,
        sendEmailConfig.templateID,
        formData,
        sendEmailConfig.userID
      )
      .then(
        () => {
          setSuccessMessage(
            "Thanks! I've received your message, I'll get back you shortly!"
          );
        },
        () => {
          setErrorMessage(
            "Oops! Not sure what happened there but your message wasn't sent!"
          );
        }
      );
  };

  return (
    <PageTemplate>
      <div className="contact-page-content">
        <div className="contact-page-form-container">
          <h3 className="contact-page-header">Get in touch</h3>
          <p className="contact-page-subheader">
            You can also skip the formalities and send me a DM @ifedaviid
          </p>
          {errorMessage && (
            <Alert
              onClose={() => setErrorMessage(false)}
              dismissible
              variant="danger"
            >
              {errorMessage}
            </Alert>
          )}
          {successMessage ? (
            <div className="success-message-container">
              <div className="success-message">
                <img
                  className="success-message-icon"
                  alt="CheckmarkIcon"
                  src={greenCheckMarkIcon}
                />
                <p>{successMessage}</p>
                <StyledButton
                  text="Dismiss"
                  variant="link"
                  style={{ color: "#000000", textDecoration: "underline" }}
                  onClick={() => setSuccessMessage(false)}
                />
              </div>
            </div>
          ) : (
            <Formik
              initialValues={{
                sender_name: "",
                reply_to: "",
                sender_message: "",
              }}
              validationSchema={contactSchema}
            >
              {({ values, errors, touched, handleBlur, handleChange }) => (
                <Form>
                  <FormGroup controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      name="sender_name"
                      placeholder="Name"
                      value={values.sender_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.sender_name && touched.sender_name
                      ? renderErrorMessage(errors.sender_name)
                      : null}
                  </FormGroup>
                  <FormGroup controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      name="reply_to"
                      placeholder="Email Address"
                      value={values.reply_to}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.reply_to && touched.reply_to
                      ? renderErrorMessage(errors.reply_to)
                      : null}
                  </FormGroup>
                  <FormGroup controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="sender_message"
                      placeholder="Message"
                      value={values.sender_message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.sender_message && touched.sender_message
                      ? renderErrorMessage(errors.sender_message)
                      : null}
                  </FormGroup>
                  <StyledButton
                    text="Submit"
                    disabled={Object.keys(errors).length ? true : false}
                    onClick={() => {
                      setFormData(values);
                      toggle();
                    }}
                  />
                </Form>
              )}
            </Formik>
          )}
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
              onClick={() => {
                if (hasMissingValues(formData)) {
                  setErrorMessage("Some required fields are missing.");
                } else {
                  callSendEmail();
                }
                toggle();
              }}
            />
          </Modal.Footer>
        </PopUpModal>
      </div>
    </PageTemplate>
  );
};

export default withRouter(Contact);
