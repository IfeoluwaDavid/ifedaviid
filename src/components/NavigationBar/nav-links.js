import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
`;

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
        <StyledLink to="/reviews">References</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">Contact</StyledLink>
      </li>
    </>
  );
};

export default NavigationLinks;
