import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/certifications-data";

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

const Certifications = () => {
  return (
    <div>
      {certificates.map((cert, key) => {
        return (
          <MainContainer>
            <DataContainer>
              <p style={{ fontWeight: "bold" }}>{cert.title}</p>
              <p>{cert.duration}</p>
              <p>Verification Code: {cert.verificationCode}</p>
              <hr style={{ margin: "0.5rem 0.5rem" }} />
            </DataContainer>
          </MainContainer>
        );
      })}
    </div>
  );
};

export default Certifications;
