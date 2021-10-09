import { Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyStyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-left: 0.5rem;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledButton = ({ text, variant, type, onClick, icon, ...rest }) => {
  return (
    <MyStyledButton
      style={{ marginRight: "10px" }}
      variant={variant || "light"}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {text}
      {icon && <CloseIcon icon={icon} />}
    </MyStyledButton>
  );
};

export default StyledButton;
