import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import "./Portfolio.css";

const projects = require("../../src/data/portfolio-data.json");

const StyledCard = styled(Card)`
  width: auto;
  position: static;
  max-width: 500px;
  min-width: 350px;
  @media (max-width: 1223px) {
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
                  {project.demoURL ? (
                    <>
                      <a
                        target="_blank"
                        href={project.demoURL}
                        rel="noopener noreferrer"
                      >
                        <StyledButton
                          text="Live Demo"
                          icon={faExternalLinkAlt}
                          variant="dark"
                        />
                      </a>
                      <a
                        target="_blank"
                        href={project.githubURL}
                        rel="noopener noreferrer"
                      >
                        <StyledButton
                          text="Github ReadMe"
                          variant="outline-secondary"
                        />
                      </a>
                    </>
                  ) : (
                    <a
                      target="_blank"
                      href={project.githubURL}
                      rel="noopener noreferrer"
                    >
                      <StyledButton
                        text="Github ReadMe"
                        icon={faExternalLinkAlt}
                        variant="dark"
                      />
                    </a>
                  )}
                </Card.Body>
                <Card.Footer>
                  Stack:{" "}
                  {project.stack.map((tag, index) => {
                    return (
                      <Tag key={index} style={{ margin: "5px" }}>
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
