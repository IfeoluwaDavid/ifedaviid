import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import img from "../images/ife-grad.jpg";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import { PopUpModal, usePopUpModal } from "../components/Modal";
import { EducationalBackground, WorkHistory, Skills } from "../pages/modals";
import "./About.css";

const About = () => {
  const EDUCATIONAL_BACKGROUND = "Educational Background";
  const WORK_HISTORY = "Work History";
  const SKILLSET = "Skills";

  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const { isShowing, toggle } = usePopUpModal();

  return (
    <PageTemplate>
      <div className="about-page-content">
        <img className="about-page-content-img" alt="panda" src={img} />
        <div className="about-page-content-text">
          <h3 className="about-page-content-text-header">About Me</h3>
          <p className="about-page-content-text-desc">
            My name is Ifeoluwa David Adese. I'm a happy 24 year old Software
            Developer at Rebel.com. I'm originally from Lagos State, Nigeria,
            but I'm currently based in Thunder Bay, Ontario where I attended
            University.
          </p>
          <p className="about-page-content-text-desc">
            My skillset mostly revolves around web development. However, I also
            have strong interests and minimal experience with mobile application
            development, cloud computing, data science and UI/UX design. In my
            free time, I enjoy playing soccer, watching movies, learning new
            stuff, relaxing or taking the time to make things look visually
            appealing.
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
          {modalContent}
        </PopUpModal>
      </div>
    </PageTemplate>
  );
};

export default withRouter(About);
