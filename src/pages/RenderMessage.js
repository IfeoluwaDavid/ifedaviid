import React from "react";
import { withRouter } from "react-router-dom";
import "./RenderMessage.css";
import PageTemplate from "./PageTemplate";
import StyledButton from "../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFoundIcon = styled(FontAwesomeIcon)`
  color: #000;
  transform: scale(2.5);
  margin: 1rem 1rem;
`;

export const RenderMessage = ({ icon, title, message, slug, buttonText }) => {
  return (
    <PageTemplate>
      <div className="error-page-content">
        <div className="error-page-content-container">
          <NotFoundIcon icon={icon} />
          <p className="error-name">{title}</p>
          <p style={{ alignSelf: "center" }}>{message}</p>
          <Link to={slug}>
            <StyledButton text={buttonText} variant="dark" />
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default withRouter(RenderMessage);
