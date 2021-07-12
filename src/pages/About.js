import React from "react";
import styled from "styled-components";
import img from "../images/ife-grad.jpg";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";

const MainContainer = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  top: 20%;
  -webkit-transform: translateY(-50%, -50%);
  justify-content: center;

  main {
    display: flex;
    justify-content: center;
  }

  div {
    width: 50%;
    margin-left: 50px;
  }

  img {
    position: relative;
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
    top: 10%;
    display: block;
    text-align: center;
    div {
      margin: 0 auto;
    }
    main {
      display: block;
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
        <main>
          <img alt="panda" src={img} />
          <div>
            <h3>About Me</h3>
            <p>
              My name is Ifeoluwa David Adese. I'm a 24 year old Software
              Developer at Rebel.com from Lagos State, Nigeria. I love to design
              and build user friendly and mobile responsive web applications.
              However, in my free time, I enjoy playing soccer and watching
              movies.
            </p>
            <h1>Educational Background</h1>
            <ul>
              <li>Software Engineering (Bachelors of Engineering)</li>
              <li>Lakehead University - Thunder Bay, ON.</li>
              <li>(2018 - 2021)</li>
            </ul>
            <ul>
              <li>Computer Engineering (Advanced College Diploma)</li>
              <li>Humber College - Toronto, ON.</li>
              <li>(2014 - 2018)</li>
            </ul>
          </div>
        </main>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(About);
