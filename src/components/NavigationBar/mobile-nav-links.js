import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "../Button";

const pages = require("../../data/navigation-data.json");

const MobileLinks = styled.div`
  width: 100%;
  flex-direction: column;
  padding: 10px 15px 0px 15px;
  @media screen and (min-width: 768px) {
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
          <>
            {page.isExternalLink ? (
              <a
                key={idx}
                target="_blank"
                href={page.url}
                rel="noopener noreferrer"
              >
                <Button text={page.text} />
              </a>
            ) : (
              <Link key={idx} to={page.url}>
                <Button text={page.text} />
              </Link>
            )}
          </>
        );
      })}
    </MobileLinks>
  );
};

export default MobileNavLinks;
