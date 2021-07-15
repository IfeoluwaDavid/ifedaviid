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

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
    padding: 10px;
  }

  p {
    letter-spacing: 1px;
  }

  @media (max-width: 980px) {
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
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

const Portfolio = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <h3>Past Projects</h3>
        <GridContainer>
          {projects.map((project) => {
            return (
              <StyledCard>
                <Card.Body>
                  <Title>{project.title}</Title>
                  <Card.Text>{project.description}</Card.Text>
                  <StyledButton text="See more" variant="dark" />
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
