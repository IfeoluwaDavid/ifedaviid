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
          </div>
          <p style={{ alignSelf: "center" }}>
            From setting up simple CMS-based sites or E-Commerce platforms,
            using reliable tools and technologies, to developing custom
            web-based solutions. I'd love to convert your ideas into highly
            scalable, secure, performance-optimized and SEO-friendly solutions.
          </p>
          <Link to="/contact">
            <StyledButton text="Request Quote" variant="dark" />
          </Link>
        </div>
        <div className="services-page-content-container">
          <div className="services-item-header">
            <p className="services-name">Troubleshooting & Coding Assistance</p>
          </div>
          <p>
            Need help debugging a coding project or investigating issues with a
            web-based solution? I can safely troubleshoot any technical problems
            you may be experiencing with your web technologies or point you in
            the right direction to find help. Perfect for students learning
            programming, less technical business owners etc.
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
