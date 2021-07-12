import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
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
    width: 100%;
    justify-content: center;
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

const Contact = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <main>
          <div>
            <h3>Get in touch</h3>
            <p>You can also skip the formalities and send me a DM @ifedaviid</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </main>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Contact);
