import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import styled from "styled-components";
const projects = require("../../src/data/portfolio-data.json");

const MainContainer = styled.div`
  display: block;
  justify-content: center;

  p {
    letter-spacing: 1px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const StyledCard = styled(Card)`
  width: auto;
  position: static;
  max-width: 500px;
  min-width: 300px;
  @media (max-width: 980px) {
    margin-bottom: 20px;
  }
`;

const Title = styled(Card.Title)`
  font-weight: bold;
`;

const Tag = styled(Badge)`
  background: #bbb;
  margin: 5px;
`;

const TopContainer = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
    padding: 10px;
  }

  a {
    color: white;
    text-decoration: underline;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 20px;
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const Portfolio = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <TopContainer>
          <h3>Completed Projects</h3>
          <a href="https://github.com/IfeoluwaDavid?tab=repositories">
            See All Projects
          </a>
        </TopContainer>
        <GridContainer>
          {projects.map((project) => {
            return (
              <StyledCard>
                <Card.Body>
                  <Title>{project.title}</Title>
                  <Card.Text>{project.description}</Card.Text>
                  <StyledButton text="See Demo Documentation" variant="dark" />
                </Card.Body>
                <Card.Footer>
                  Stack:{" "}
                  {project.stack.map((tag) => {
                    return <Tag bg="dark">{tag}</Tag>;
                  })}
                </Card.Footer>
              </StyledCard>
            );
          })}
        </GridContainer>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Portfolio);
