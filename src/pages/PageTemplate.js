import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

const Container = styled.body`
  font-family: Montserrat;
  display: flex;
  height: 100vh;
  @media (max-width: 1281px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  background: #343434;
  width: 100%;
  padding: 20px;
`;

const PageTemplate = ({ children }) => {
  return (
    <Container>
      <NavigationBar />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default PageTemplate;
