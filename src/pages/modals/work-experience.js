import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
const history = require("../../../src/data/work-history-data.json");

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

const DataContainer = styled.div`
  display: block;
  width: 400px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

const WorkHistory = () => {
  return (
    <Modal.Body>
      {history.map((obj, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <p>{obj.company}</p>
              <p>{obj.position}</p>
              <p>{obj.duration}</p>
              <hr />
            </DataContainer>
          </MainContainer>
        );
      })}
    </Modal.Body>
  );
};

export default WorkHistory;
