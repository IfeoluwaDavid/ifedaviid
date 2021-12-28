import React from "react";
import { withRouter } from "react-router-dom";
import img from "../images/ife.jpg";
import StyledButton from "../../src/components/Button";
import PageTemplate from "./PageTemplate";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageTemplate>
      <div className="home-page-content">
        <div className="home-page-content-img-container">
          <img className="home-page-content-img" alt="ProfilePhoto" src={img} />
        </div>
        <div className="home-page-content-text">
          <h3 className="home-page-content-text-header">Ife David Adese</h3>
          <p className="home-page-content-text-desc">
            I'm a Software Developer based in Ottawa, Canada. I design and build
            pretty and reliable web solutions.
          </p>
          <Link to="/portfolio">
            <StyledButton text="View Portfolio" />
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default withRouter(Home);
