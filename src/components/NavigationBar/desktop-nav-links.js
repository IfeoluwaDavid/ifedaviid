import styled from "styled-components";
import { Link } from "react-router-dom";

const pages = require("../../data/navigation-data.json");

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: #bbb;
  text-decoration: none;
  :hover {
    transition: margin 0.2s;
    margin-left: 0.5rem;
    color: white;
    font-weight: bold;
  }
`;

const DesktopNavLinks = () => {
  return (
    <DesktopLinks>
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            {page.isExternalLink ? (
              <StyledLink target="_blank" href={page.url}>
                {page.text}
              </StyledLink>
            ) : (
              <StyledLink as={Link} to={page.url}>
                {page.text}
              </StyledLink>
            )}
          </li>
        );
      })}
    </DesktopLinks>
  );
};

export default DesktopNavLinks;
