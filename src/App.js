import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import RenderMessage from "./pages/RenderMessage";
import {
  faExclamationCircle,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/services">
          <Services />
        </Route> */}
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <RenderMessage
            icon={faWrench}
            title="Almost Ready.."
            message="My blog is a work in progress and still under construction."
            slug="/"
            buttonText="Return Home"
          />
        </Route>
        <Route path="/404">
          <RenderMessage
            icon={faExclamationCircle}
            title="Page Not Found"
            message="Looks like the page you requested does not exist on this site."
            slug="/"
            buttonText="Return Home"
          />
        </Route>
        <Route exact path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
