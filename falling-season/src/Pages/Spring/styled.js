import styled, { keyframes } from "styled-components";

const fall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform:rotate(0deg);
    }
    10% {
        opacity: 1; 
        transform: translateX(30px) rotate(25deg);
    }
    20% {
        transform: translateX(100px) rotate(45deg);
        filter: blur(0.2px);
    }
    40% {
        transform: translateX(300px) rotate(90deg);
        filter: blur(0.5px);
    }
    60% {
        transform: translateX(700px) rotate(135deg);
        filter: blur(0.7px);
    }
    70% {
        top: 110%;
        transform: translateX(1000px) rotate(180deg);
        filter: blur(1px);
    }
    80% {
        top: 100%;
        transform: translateX(1000px) rotate(180deg);
        filter: blur(0.7px);
    }
    100% {
        top: 70%; 
        transform: translateX(1500px) rotate(225deg);
        filter: blur(0.5px);
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
  transform: scale(1.5);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;

export const FlowerContainer3 = styled.div`
  transform: scale(0.8) rotateX(-180deg);
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
