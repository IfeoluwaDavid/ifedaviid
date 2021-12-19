import React, { useState } from "react";
import styled from "styled-components";
import { Twirl as Hamburger } from "hamburger-react";

import SocialIcons from "./social-icons";
import DesktopNavLinks from "./desktop-nav-links";
import { Link } from "react-router-dom";
import MobileNavLinks from "./mobile-nav-links";

const NavBarContainer = styled.nav`
  background-color: black;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    height: ${(props) => (props.isOpen ? "32rem" : "5rem")};
    transition: height 0.1s;

    align-items: flex-start;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: fixed;
  }
`;

const NavBarItemsContainer = styled.section`
  width: fit-content;
  margin-left: 8rem;
  margin-right: 8rem;
  transition: margin 1s;

  @media (max-width: 1440px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    width: 100%;
  }
`;

const MenuIconContainer = styled.div`
  color: #fff;
  width: auto;
  display: none;
  margin: 0rem 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledNavTitle = styled.h3`
  color: white;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 3px;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const HomeLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    float: right;
    width: 100%;
    margin-right: 1rem;
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
        <MenuIconContainer onClick={() => toggleMenu()}>
          <Hamburger />
        </MenuIconContainer>
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
