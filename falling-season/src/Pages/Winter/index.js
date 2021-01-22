import React from "react";

import {
  WinterContainer,
  SnowflakeImg,
  SnowflakeContainer,
  SnowflakeContainer2,
  SnowflakeContainer3,
  Name,
} from "./styled";
import snowflake1 from "../../images/snowflake_1.png";
import snowflake2 from "../../images/snowflake_2.png";
import snowflake3 from "../../images/snowflake_3.png";

const lefts = [
  "0%",
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

const durations = ["10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"];
const delays = ["-10s", "-8s", "-6s", "-4s", "-2s", "0", "0", "0"];
const snowflakes = [snowflake1, snowflake2, snowflake3];
const sizes = [
  ["25", "3px"],
  ["35", "0px"],
  ["50", "1px"],
];

const Winter = () => {
  return (
    <WinterContainer>
      <SnowflakeContainer>
        {Array(...Array(50)).map((_, i) => {
          const randomLeft = lefts[Math.floor(Math.random() * lefts.length)];
          const randomDuration =
            durations[Math.floor(Math.random() * durations.length)];
          const randomDelay = delays[Math.floor(Math.random() * delays.length)];
          const randomSnowflake =
            snowflakes[Math.floor(Math.random() * snowflakes.length)];
          const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
          return (
            <SnowflakeImg
              key={i}
              src={randomSnowflake}
              left={randomLeft}
              duration={randomDuration}
              delay={randomDelay}
              blur={randomSize[1]}
              rotate={randomSize[2]}
              alt="snowflake"
              width={randomSize[0]}
            />
          );
        })}
      </SnowflakeContainer>
    </WinterContainer>
  );
};

export default Winter;
