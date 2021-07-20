import React from "react";
import styled from "styled-components";
const skills = require("../../../src/data/skills-data.json");

const MainContainer = styled.div`
  display: flex;
  width: auto;
  p {
    margin-bottom: 1px;
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
    div {
      margin: 0 auto;
    }
    span {
      justify-content: center;
      display: block;
    }
  }
`;

const Skills = () => {
  return (
    <>
      {skills.map((skill, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <span>
                <strong>{skill.skill}</strong>
                <p>{skill.yearsOfExperience}</p>
              </span>

              <hr />
            </DataContainer>
          </MainContainer>
        );
      })}
    </>
  );
};

export default Skills;
