import { Button } from "react-bootstrap";
import styled from "styled-components";

const MyStyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButton = ({ text, variant }) => {
  return (
    <MyStyledButton
      style={{ marginRight: "10px" }}
      variant={variant || "light"}
    >
      {text}
    </MyStyledButton>
  );
};

export default StyledButton;
