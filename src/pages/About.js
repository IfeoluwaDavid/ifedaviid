import React, { useState } from "react";
import styled from "styled-components";
import img from "../images/ife-grad.jpg";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import { PopUpModal, usePopUpModal } from "../components/Modal";
import { Modal } from "react-bootstrap";
import { EducationalBackground, WorkHistory, Skills } from "../pages/modals";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 50%;
    margin-left: 50px;
  }

  img {
    height: 480px;
    width: 320px;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

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
      margin: 0 auto;
    }
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const About = () => {
  const EDUCATIONAL_BACKGROUND = "Educational Background";
  const WORK_HISTORY = "Work History";
  const SKILLSET = "Skills";

  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const { isShowing, toggle } = usePopUpModal();

  return (
    <PageTemplate>
      <MainContainer>
        <img alt="panda" src={img} />
        <div>
          <h3>About Me</h3>
          <p>
            My name is Ifeoluwa David Adese. I'm a happy 24 year old Software
            Developer at Rebel.com. I'm originally from Lagos State, Nigeria,
            but I'm currently based in Thunder Bay, Ontario where I attended
            University.
          </p>
          <p>
            My skillset mostly revolves around web development. However, I also
            have strong interests and minimal experience with mobile application
            development, data science and UI/UX design. In my free time, I enjoy
            playing soccer, watching movies, relaxing and making things look
            visually appealing.
          </p>
          <StyledButton
            text={EDUCATIONAL_BACKGROUND}
            onClick={() => {
              setModalTitle(EDUCATIONAL_BACKGROUND);
              setModalContent(<EducationalBackground />);
              toggle();
            }}
          />
          <StyledButton
            text={WORK_HISTORY}
            onClick={() => {
              setModalTitle(WORK_HISTORY);
              setModalContent(<WorkHistory />);
              toggle();
            }}
          />
          <StyledButton
            text={SKILLSET}
            onClick={() => {
              setModalTitle(SKILLSET);
              setModalContent(<Skills />);
              toggle();
            }}
          />
        </div>
        <PopUpModal title={modalTitle} isShowing={isShowing} hide={toggle}>
          <Modal.Body>{modalContent}</Modal.Body>
        </PopUpModal>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(About);
