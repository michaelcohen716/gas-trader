import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: lightgrey;
    width: 100%;
    font-family: Courier, monospace;
    font-weight: bold;
`;

const Button = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
)

Button.defaultProps = {
    onClick: () => alert('Clicked.')
};

export default Button;