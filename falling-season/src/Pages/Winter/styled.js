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

export const SnowflakeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SnowflakeContainer2 = styled.div`
  transform: scale(2) rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;

export const SnowflakeContainer3 = styled.div`
  transform: scale(0.8) rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

export const SnowflakeImg = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  animation: ${fall} ${(props) => props.duration || "15s"} linear infinite;
  animation-delay: ${(props) => props.delay || "-7s"};
`;

export const Name = styled.h1`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 8em;
  margin: 0;
  padding: 0;
`;
