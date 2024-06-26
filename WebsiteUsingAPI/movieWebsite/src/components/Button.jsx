import styled from "styled-components";

const Button = ({ text, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  background: none;
  color: white;

  &:hover {
    color: orange;
    font-weight: bold;
    cursor: pointer;
  }

  &.active {
    color: darkorange;
    font-weight: bold;
  }
`;

export default Button;
