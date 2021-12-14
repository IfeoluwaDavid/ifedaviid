import React from "react";
import styled from "styled-components";
const history = require("../../../src/data/work-history-data.json");

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

const WorkHistory = () => {
  return (
    <>
      {history.map((obj, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <p>{obj.company}</p>
              <p>{obj.position}</p>
              <p>{obj.duration}</p>
              <hr style={{ margin: "0.5rem 0.5rem" }} />
            </DataContainer>
          </MainContainer>
        );
      })}
    </>
  );
};

export default WorkHistory;
