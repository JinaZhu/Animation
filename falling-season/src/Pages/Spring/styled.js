import styled, { keyframes } from "styled-components";

const fall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(-50px) rotate(0deg);
    }
    10% {
        opacity: 1; 
    }
    20% {
        transform: translateX(-20px) rotate(45deg);
    }
    40% {
        transform: translateX(0px) rotate(90deg);
    }
    60% {
        transform: translateX(5px) rotate(135deg);
    }
    80% {
        transform: translateX(15px) rotate(180deg);
    }
    100% {
        top: 110%; 
        transform: translateX(30px) rotate(225deg);
    }
`;

//#f7dcdc;
export const SpringContainer = styled.div`
  background-color: #f7dcdc;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const FlowerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FlowerContainer2 = styled.div`
  transform: scale(1.5) rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;

export const FlowerContainer3 = styled.div`
  transform: scale(0.8) rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

export const FlowerImg = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  animation: ${fall} ${(props) => props.duration || "15s"} linear infinite;
  animation-delay: ${(props) => props.delay || "-7s"};
`;
