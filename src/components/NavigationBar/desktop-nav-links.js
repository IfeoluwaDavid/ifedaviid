import styled from "styled-components";
import NavigationLinks from "./nav-links";

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

const DesktopNavLinks = () => {
  return (
    <DesktopLinks>
      <NavigationLinks />
    </DesktopLinks>
  );
};

export default DesktopNavLinks;
