import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import StyledButton from "../../src/components/Button";
import PageTemplate from "./PageTemplate";

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
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const Contact = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <div>
          <h3>Get in touch</h3>
          <p>You can also skip the formalities and send me a DM @ifedaviid</p>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <StyledButton text="Submit" />
          </Form>
        </div>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Contact);
