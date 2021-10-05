import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  :hover {
    margin-left: 0.5rem;
    color: white;
    font-weight: bold;
  }
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
        <StyledLink to="/references">References</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">Contact</StyledLink>
      </li>
    </>
  );
};

export default NavigationLinks;
