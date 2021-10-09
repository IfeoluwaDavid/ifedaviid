import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
<<<<<<< HEAD
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
=======

>>>>>>> 26ddbecab28762541f5e50c8cf0e4462cee816a7
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import "./Portfolio.css";

const projects = require("../../src/data/portfolio-data.json");

const StyledCard = styled(Card)`
  width: auto;
  position: static;
  max-width: 500px;
  min-width: 350px;
  @media (max-width: 980px) {
    margin-bottom: 20px;
  }
`;

const Title = styled(Card.Title)`
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  color: #343434;
`;

const Tag = styled(Badge)`
  background: #d8d8d8;
`;

const Portfolio = () => {
  return (
    <PageTemplate>
      <div className=".portfolio-page-content">
        <div className="portfolio-page-header-container">
          <h3 className="portfolio-page-header">Completed Projects</h3>
          <a
            className="portfolio-page-header-link"
            href="https://github.com/IfeoluwaDavid?tab=repositories"
          >
            See All Projects
          </a>
        </div>
        <div className="portfolio-page-grid-container">
          {projects.map((project, idx) => {
            return (
              <StyledCard key={idx}>
                <Card.Body>
                  <Tag pill style={{ marginBottom: "1rem" }}>
                    {project.type}
                  </Tag>
                  <Title>{project.title}</Title>
                  <CardText>{project.description}</CardText>
                  <StyledButton
                    text="See Demo Documentation"
                    icon={faExternalLinkAlt}
                    variant="dark"
                  />
                </Card.Body>
                <Card.Footer>
                  Stack:{" "}
                  {project.stack.map((tag, index) => {
                    return (
                      <Tag key={index} bg="secondary" style={{ margin: "5px" }}>
                        {tag}
                      </Tag>
                    );
                  })}
                </Card.Footer>
              </StyledCard>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
};

export default withRouter(Portfolio);
