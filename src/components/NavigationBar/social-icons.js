import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  faYahoo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

export default SocialIcons;
