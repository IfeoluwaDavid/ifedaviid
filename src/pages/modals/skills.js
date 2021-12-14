import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
const skills = require("../../../src/data/skills-data.json");

const MainContainer = styled.div`
  display: flex;
  p {
    margin-bottom: 0.5rem;
  }

  img {
    height: 100px;
    width: 100px;
  }
`;

const DataContainer = styled.span`
  display: block;
  width: 100%;
  span {
    display: flex;
    justify-content: space-between;
  }
  strong {
    margin-right: 10px;
  }

  @media (max-width: 980px) {
    display: block;
    span {
      justify-content: center;
      display: block;
    }
  }
`;

const Skills = () => {
  return (
    <Modal.Body>
      {skills.map((skill, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <span>
                <strong>{skill.skill}</strong>
                <p>{skill.yearsOfExperience}</p>
              </span>
              <hr style={{ margin: "0.5rem 0.5rem" }} />
            </DataContainer>
          </MainContainer>
        );
      })}
    </Modal.Body>
  );
};

export default Skills;
