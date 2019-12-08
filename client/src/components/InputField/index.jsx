import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    background: #f3eee8;
    outline: none;
    font-family: Courier, monospace;
    color: #009dd1
    width: 100%;
    padding: 0px 10px;
    margin-bottom: 20px;
`;

const InputField = ({ value, placeholder, onChange }) => {
  return (
    <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default InputField;
