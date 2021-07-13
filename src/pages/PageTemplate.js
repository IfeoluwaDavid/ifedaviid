import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

const Container = styled.body`
  font-family: Montserrat;
  display: flex;
  height: 100vh;
  min-width: 400px;
  @media (max-width: 1281px) {
    display: block;
  }
`;

const PageContainer = styled.div`
  background: #343434;
  width: 100%;
  padding: 20px;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: auto;
  margin: 10px;
  width: auto;

  section {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 980px) {
    top: 10%;
    text-align: center;

    div {
      display: block;
    }
  }
`;

const PageTemplate = ({ children }) => {
  return (
    <Container>
      <NavigationBar />
      <PageContainer>
        <ContentContainer>
          <section>{children}</section>
        </ContentContainer>
      </PageContainer>
    </Container>
  );
};

export default PageTemplate;
