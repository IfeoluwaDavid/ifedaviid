import React from "react";
import styled from "styled-components";
import { educationHistory } from "../../data/education-data";

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

const DataContainer = styled.div`
  display: block;
  width: 100%;

  span {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 980px) {
    span {
      justify-content: center;
      display: block;
    }
  }
`;

const EducationalBackground = () => {
  return (
    <div>
      {educationHistory.map((school, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <span>
                <p style={{ fontWeight: "bold" }}>{school.institutionName}</p>
                <p>({school.duration})</p>
              </span>
              <p>{school.location}</p>
              <p>
                {school.field} ({school.award})
              </p>
              <hr style={{ margin: "0.5rem 0.5rem" }} />
            </DataContainer>
          </MainContainer>
        );
      })}
    </div>
  );
};

export default EducationalBackground;
