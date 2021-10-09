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

  @media (max-width: 768px) {
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
      <a href="https://www.facebook.com/ifedaviid">
        <SocialIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/ifedaviid/">
        <SocialIcon icon={faInstagram} />
      </a>
      <a href="https://github.com/IfeoluwaDavid">
        <SocialIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/ife-david-adese-194a56a8/">
        <SocialIcon icon={faLinkedin} />
      </a>
      <a href="/contact">
        <SocialIcon icon={faYahoo} />
      </a>
    </IconGroup>
  );
};

export default SocialIcons;
