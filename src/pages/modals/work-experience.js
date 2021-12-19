import React from "react";
import styled from "styled-components";
const history = require("../../../src/data/work-history-data.json");

const MainContainer = styled.div`
  display: flex;
  span {
    display: flex;
    justify-content: space-between;
  }
  strong {
    margin-right: 10px;
  }
  p {
    margin-bottom: 0.5rem;
  }
  img {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 980px) {
    display: block;
    span {
      justify-content: center;
      display: block;
    }
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
              <span>
                <strong>{obj.company}</strong>

                <p>{obj.duration}</p>
              </span>
              <p>{obj.position}</p>
              <hr style={{ margin: "0.5rem 0.5rem" }} />
            </DataContainer>
          </MainContainer>
        );
      })}
    </>
  );
};

export default WorkHistory;
