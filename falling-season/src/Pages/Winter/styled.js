import styled, { keyframes } from "styled-components";

const fall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(-20px) rotate(0deg);
    }
    10% {
        opacity: 1; 
    }
    20% {
        transform: translateX(-20px) rotate(45deg);
    }
    40% {
        transform: translateX(-20px) rotate(90deg);
    }
    60% {
        transform: translateX(20px) rotate(135deg);
    }
    80% {
        transform: translateX(-20px) rotate(180deg);
    }
    100% {
        top: 110%; 
        transform: translateX(-20px) rotate(225deg);
    }
`;

export const WinterContainer = styled.div`
  background: #a2bab9;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const SnowflakeForward = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SnowflakeBackward = styled.div`
  transform: scale(0.8) rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

export const SnowflakeImg = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  animation: ${fall} ${(props) => props.duration} linear infinite;
  animation-delay: ${(props) => props.delay};
  filter: blur(${(props) => props.blur});
  transform: ${(props) => props.rotate};
`;
