import React from "react";
import { withRouter } from "react-router-dom";
import img from "../images/ife-grad.jpg";
import PageTemplate from "./PageTemplate";
import {
  EducationalBackground,
  WorkHistory,
  Skills,
  Certifications,
} from "../pages/modals";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import "./About.css";

const AccordionItem = styled(Accordion.Item)`
  display: block;
  justify-content: center;
  border-top: 1px solid #bbb;
  :first-child {
    border-top: 2px solid #bbb;
  }
  :last-child {
    border-bottom: 1px solid #bbb;
  }
  h2 {
    margin-bottom: 0rem;
    border-bottom: 0.5px solid #bbb;
  }
`;

const AccordionHeader = styled(Accordion.Header)`
  button {
    color: #bbb;
    width: 100%;
    font-weight: bolder;
    font-size: 1rem;
    padding: 1rem;
    text-align: left;
    border: none;
    background: #343434;
    :hover {
      background: #bbb;
      color: black;
    }
  }
`;

const AccordionBody = styled(Accordion.Body)`
  color: #bbb;
  padding: 1rem 2rem;
`;

const About = () => {
  const EDUCATIONAL_BACKGROUND = "Educational Background";
  const WORK_HISTORY = "Work History";
  const SKILLSET = "Skills";
  const CERTS = "Certifications";

  return (
    <PageTemplate>
      <div className="about-page-content">
        <div className="about-page-content-img-and-text">
          <img className="about-page-content-img" alt="panda" src={img} />
          <div className="about-page-content-text">
            <h3 className="about-page-content-text-header">About Me</h3>
            <p className="about-page-content-text-desc">
              My name is Ife David Adese. I'm a Software
              Engineer based in Ottawa, Canada. Academically, I majored in Computer and
              Software Engineering and my professional experience mostly revolves around
              building web applications. However, I also have strong interests and minimal
              experience with UI/UX design, cloud computing and anything data science.
            </p>
            <p className="about-page-content-text-desc">
              I aim to be a self-sufficient Software Engineer strongly capable of building quality
              large scale applications. Hence, in addition to my academic background, I'm constantly
              improving my craft as a developer through my current job, online courses and personal hands-on projects which can be
              found in the portfolio section of this site. In my free time, I enjoy relaxing, watching
              documentaries, learning new stuff or taking the time to make things look visually appealing
              - even the really minor things.
            </p>
            <p className="about-page-content-text-desc">

            </p>
          </div>
        </div>
        <Accordion style={{ zIndex: "1" }}>
          <AccordionItem eventKey="0">
            <AccordionHeader>{EDUCATIONAL_BACKGROUND}</AccordionHeader>
            <AccordionBody>
              <EducationalBackground />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <AccordionHeader>{WORK_HISTORY}</AccordionHeader>
            <AccordionBody>
              <WorkHistory />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <AccordionHeader>{SKILLSET}</AccordionHeader>
            <AccordionBody>
              <Skills />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="3">
            <AccordionHeader>{CERTS}</AccordionHeader>
            <AccordionBody>
              <Certifications />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </PageTemplate>
  );
};

export default withRouter(About);
