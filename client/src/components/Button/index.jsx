import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: lightgrey;
    width: 100%;
    font-family: Courier, monospace;
    font-weight: bold;
    outline: none;
`;

const Button = ({ children, onClick, disabled }) => (
    <StyledButton onClick={onClick} disabled={disabled}>{disabled || children}</StyledButton>
)

Button.defaultProps = {
  onClick: () => alert("Clicked.")
};

export default Button;
