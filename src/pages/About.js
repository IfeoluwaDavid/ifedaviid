import React from "react";
import styled from "styled-components";
import img from "../images/ife-grad.jpg";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";

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
  return (
    <PageTemplate>
      <MainContainer>
        <img alt="panda" src={img} />
        <div>
          <h3>About Me</h3>
          <p>
            My name is Ifeoluwa David Adese. I'm a happy 24 year old Software
            Developer at Rebel.com from Lagos State, Nigeria. I'm currently
            based in Thunder Bay, Ontario where I attended University. I enjoy
            playing soccer, watching movies, relaxing and making things look
            visually appealing.
          </p>
          <p>
            As much as I love the idea of being a "full-stack" software
            developer, I must say I seem to enjoy the design and front-end
            development aspects of my projects, than the infrastructural and
            back-end work.
          </p>
          <StyledButton text="Education" />
          <StyledButton text="Work Experience" />
          <StyledButton text="Skills" />
        </div>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(About);
