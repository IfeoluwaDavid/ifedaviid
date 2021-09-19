import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SocialIcons from "./social-icons";
import DesktopNavLinks from "./desktop-nav-links";
import MobileNavLinks from "./mobile-nav-links";

const NavBarContainer = styled.div`
  background-color: black;
  width: 30%;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1281px) {
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: fixed;

    div {
      display: flex;
      width: 100%;
      margin: 0 auto;
    }
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
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 3px;
  margin: 3px 0px 3px 0px;

  @media (max-width: 1281px) {
    float: right;
    width: 100%;
    margin-right: 30px;
    text-align: right;
  }
`;

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavBarContainer>
      <NavBarItemsContainer>
        <MenuIcon icon={faBars} onClick={() => toggleMobileNav()} />
        <StyledNavTitle>IFEDAVIID</StyledNavTitle>
        <DesktopNavLinks />
        <SocialIcons />
      </NavBarItemsContainer>
      {isOpen ? <MobileNavLinks /> : null}
    </NavBarContainer>
  );
};

export default NavigationBar;
