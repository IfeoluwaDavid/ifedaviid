import React from "react";
import NavigationBar from "../components/NavigationBar/navigation-bar";
import "./PageTemplate.css";

const PageTemplate = ({ children }) => {
  return (
    <div className="main-container">
      <NavigationBar />
      <div className="page-container">
        <div className="page-content-container">
          <section className="section-container">{children}</section>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
