import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SocialIcons from "./social-icons";
import DesktopNavLinks from "./desktop-nav-links";
import { Link } from "react-router-dom";
import MobileNavLinks from "./mobile-nav-links";

const NavBarContainer = styled.nav`
  background-color: black;
  width: 30%;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1281px) {
    height: ${(props) => (props.isOpen ? "26rem" : "4.5rem")};
    transition: height 0.1s;

    align-items: flex-start;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: fixed;
  }
`;

const NavBarItemsContainer = styled.section`
  margin: 10px;
  width: fit-content;

  @media (max-width: 1281px) {
    margin: 0;
    display: flex;
    width: 100%;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  width: auto;
  margin: 10px 30px 0 30px;
  transform: scale(2);
  display: none;
  @media (max-width: 1281px) {
    display: flex;
  }
`;

const StyledNavTitle = styled.h3`
  color: white;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 3px;
  margin: 3px 0px 3px 0px;
`;

const HomeLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
  @media (max-width: 1281px) {
    float: right;
    width: 100%;
    margin-right: 30px;
    text-align: right;
  }
`;

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavBarContainer isOpen={isOpen} toggleMenu={toggleMenu}>
      <NavBarItemsContainer>
        <MenuIcon icon={faBars} onClick={() => toggleMenu()} />
        <HomeLink to="/home">
          <StyledNavTitle>IFEDAVIID</StyledNavTitle>
        </HomeLink>
        <DesktopNavLinks />
        <SocialIcons />
      </NavBarItemsContainer>
      {isOpen ? <MobileNavLinks /> : null}
    </NavBarContainer>
  );
};

export default NavigationBar;
