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

const Winter = () => {
  return (
    <WinterContainer>
      <Name>Jina Zhu</Name>
      <SnowflakeContainer>
        <SnowflakeImg
          left={"30%"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"50%"}
          duration={"20s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"70%"}
          duration={"25s"}
          delay={"-5s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"15s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"85%"}
          duration={"18s"}
          delay={"-5s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"12s"}
          delay={"-10s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"15%"}
          duration={"14s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"60%"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
      </SnowflakeContainer>
      <SnowflakeContainer2>
        <SnowflakeImg
          left={"30%"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"50%"}
          duration={"20s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"70%"}
          duration={"25s"}
          delay={"-5s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"15s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"85%"}
          duration={"18s"}
          delay={"-5s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"12s"}
          delay={"-10s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"15%"}
          duration={"14s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"60%"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
      </SnowflakeContainer2>
      <SnowflakeContainer3>
        <SnowflakeImg
          left={"30%"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"50%"}
          duration={"20s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"70%"}
          duration={"25s"}
          delay={"-5s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"15s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"85%"}
          duration={"18s"}
          delay={"-5s"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"0%"}
          duration={"12s"}
          delay={"-10s"}
          src={snowflake3}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"15%"}
          duration={"14s"}
          src={snowflake1}
          alt="snowflake"
          width="100"
        />
        <SnowflakeImg
          left={"60%"}
          src={snowflake2}
          alt="snowflake"
          width="100"
        />
      </SnowflakeContainer3>
    </WinterContainer>
  );
};

export default Winter;