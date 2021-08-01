import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

const Container = styled.div`
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
  padding: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
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
    height: 100%;
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
