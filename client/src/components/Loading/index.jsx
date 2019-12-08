import React from 'react';
import styled from 'styled-components';
import cybertruck from "../../assets/images/cybertruck.png";

const LoadingImg = styled.img`
    width: 48px;
  animation: rotation 2s infinite linear;
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const Loading = () => (<LoadingImg src={cybertruck} />);

export default Loading;