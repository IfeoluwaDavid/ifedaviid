import React from "react";
import styled from "styled-components";

import { educationHistory } from "../../data/education-data";

const MainContainer = styled.div`
  display: flex;
  p {
    margin-bottom: 1px;
  }

  img {
    height: 100px;
    width: 100px;
  }
`;

// const ImageContainer = styled.div``;

const DataContainer = styled.div`
  display: block;
  width: 100%;
`;

const EducationalBackground = () => {
  return (
    <>
      {educationHistory.map((school, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <p>
                {school.institutionName} - {school.location}
              </p>
              <p>
                {school.field} ({school.award})
              </p>
              <p>{school.duration}</p>
              <hr />
            </DataContainer>
          </MainContainer>
        );
      })}
    </>
  );
};

export default EducationalBackground;
