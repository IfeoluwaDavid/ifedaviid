import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  faYahoo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

const IconGroup = styled.span`
  width: auto;

  @media (max-width: 1281px) {
    display: none;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
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
  letter-spacing: 3px;

  @media (max-width: 1281px) {
    float: right;
    width: 100%;
    margin-right: 30px;
    text-align: right;
  }
`;

const DesktopLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  color: white;
  width: fit-content;

  margin-top: 30px;
  margin-bottom: 30px;

  li {
    letter-spacing: 1px;
    font-size: 15px;

    color: #bbb;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  @media (max-width: 1281px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  display: none;
  padding: 10px 15px 0px 15px;
  list-style-type: none;
  width: 100%;
  margin: 0;
  color: white;

  li {
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    background: #343434;
    letter-spacing: 1px;
    font-size: 15px;

    :hover {
      background: grey;
    }
  }

  @media (max-width: 1281px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: #bbb;
`;

const SocialIcons = () => {
  return (
    <IconGroup>
      <SocialIcon icon={faFacebookF} />
      <SocialIcon icon={faInstagram} />
      <SocialIcon icon={faGithub} />
      <SocialIcon icon={faLinkedin} />
      <SocialIcon icon={faYahoo} />
    </IconGroup>
  );
};

const NavigationLinks = () => {
  return (
    <>
      <li>
        <StyledLink to="/home">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/about">About</StyledLink>
      </li>
      <li>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </li>
      <li>
        <StyledLink to="/reviews">Recommendations</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">Contact</StyledLink>
      </li>
    </>
  );
};

const DesktopNavLinks = () => {
  return (
    <DesktopLinks>
      <NavigationLinks />
    </DesktopLinks>
  );
};

const MobileNavLinks = () => {
  return (
    <MobileLinks>
      <NavigationLinks />
    </MobileLinks>
  );
};

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
