import React from "react";

import { WinterContainer } from "./styled";
import snowflake1 from "../../images/snowflake_1.png";
import snowflake2 from "../../images/snowflake_2.png";
import snowflake3 from "../../images/snowflake_3.png";

const Winter = () => {
  return (
    <WinterContainer>
      <img src={snowflake1} alt="snowflake" width="100" />
      <img src={snowflake2} alt="snowflake" width="100" />
      <img src={snowflake3} alt="snowflake" width="100" />
    </WinterContainer>
  );
};

export default Winter;
