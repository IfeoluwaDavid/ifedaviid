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
`;

const EducationalBackground = () => {
  return (
    <div>
      {educationHistory.map((school, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <p style={{ fontWeight: "bold" }}>
                {school.institutionName} ({school.duration})
              </p>
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
