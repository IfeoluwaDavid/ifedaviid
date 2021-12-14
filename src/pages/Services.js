import React from "react";
import { withRouter } from "react-router-dom";
import "./Services.css";
import PageTemplate from "./PageTemplate";
import StyledButton from "../components/Button";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <PageTemplate>
      <div className="services-page-content">
        <div className="services-page-header-container">
          <h3 className="services-page-header">Services</h3>
        </div>
        <div className="services-page-content-container">
          <div className="services-item-header">
            <p className="services-name">Web Design & Development</p>
            <p className="services-rates">Starting at $100</p>
          </div>
          <p style={{ alignSelf: "center" }}>
            Is it for fear to wet a widow's eye, That thou consum'st thy self in
            single life? Ah! if thou issueless shalt hap to die, The world will
            wail thee like a makeless wife; The world will be thy widow and
            still weep That thou no form of.
          </p>
          <Link to="/contact">
            <StyledButton text="Request Quote" variant="dark" />
          </Link>
        </div>
        <div className="services-page-content-container">
          <div className="services-item-header">
            <p className="services-name">Troubleshooting & Coding Assistance</p>
            <p className="services-rates">Starting at $15/hr</p>
          </div>
          <p>
            Is it for fear to wet a widow's eye, That thou consum'st thy self in
            single life? Ah! if thou issueless shalt hap to die, The world will
            wail thee like a makeless wife; The world will be thy widow and
            still weep That thou no form of.
          </p>
          <Link to="/contact">
            <StyledButton text="Schedule a Session" variant="dark" />
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default withRouter(Services);
