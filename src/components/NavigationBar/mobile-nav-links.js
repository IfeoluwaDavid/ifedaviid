import styled from "styled-components";
import NavigationLinks from "./nav-links";

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

const MobileNavLinks = () => {
  return (
    <MobileLinks>
      <NavigationLinks />
    </MobileLinks>
  );
};

export default MobileNavLinks;
