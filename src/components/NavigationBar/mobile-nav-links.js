import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "../Button";

const pages = require("../../data/navigation-data.json");

const MobileLinks = styled.div`
  flex-direction: column;
  padding: 10px 15px 0px 15px;
  @media screen and (min-width: 1281px) {
    display: none;
  }
`;

const Button = styled(StyledButton)`
  width: 100%;
  padding: 1rem;
  text-align: left;
  margin-bottom: 0.09rem;
  background: #343434;
  color: #bbb;
  font-weight: bold;
  border: 0px;
`;

const MobileNavLinks = () => {
  return (
    <MobileLinks>
      {pages.map((page, idx) => {
        return (
          <Link key={idx} to={page.url}>
            <Button text={page.text} />
          </Link>
        );
      })}
    </MobileLinks>
  );
};

export default MobileNavLinks;
