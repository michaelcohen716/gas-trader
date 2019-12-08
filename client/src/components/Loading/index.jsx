import React from "react";
import styled from "styled-components";
import cybertruck from "../../assets/images/cybertruck.png";

const LoadingImg = styled.img`
  width: ${props => props.imgWidth}px;
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

const LoadingBar = styled.div`
  width: 100%;
  position: relative;
  display: block;
  height: 28px;
  img {
    width: ${props => props.imgWidth}px;
    animation: loading 3s infinite;
    position: absolute;
    @keyframes loading {
      0% {
        left: 0;
      }
      50% {
        left: calc(100% - ${props => props.imgWidth}px);
      }
      100% {
        left: 0%;
      }
    }
  }
`;

const Loading = ({ type, text, imgWidth }) =>
  type === "spinner" ? (
    <LoadingImg src={cybertruck} imgWidth={imgWidth} />
  ) : (
    <LoadingBar imgWidth={imgWidth}>
      {text}
      <img src={cybertruck} />
    </LoadingBar>
  );

Loading.defaultProps = {
  type: "spinner",
  text: '',
  imgWidth: 48
};

export default Loading;
