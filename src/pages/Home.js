import React from "react";
import styled from "styled-components";
import img from "../images/ife.jpg";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PageTemplate from "./PageTemplate";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 50%;
    margin-left: 50px;
  }

  img {
    position: relative;
    height: 220px;
    width: 220px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
    color: #bbb;
    letter-spacing: 1px;
  }

  @media (max-width: 980px) {
    display: block;
    div {
      margin: 0 auto;
    }
    h3 {
      justify-content: center;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <img alt="panda" src={img} />
        <div>
          <h3>Ifeoluwa David Adese</h3>
          <p>
            I'm a Software Developer based in Thunder Bay and I love to design
            and build web and mobile applications.
          </p>
          <StyledButton variant="light"> Abeg Hire Me </StyledButton>
        </div>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Home);
