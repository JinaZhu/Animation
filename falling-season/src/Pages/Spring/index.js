import React from "react";

import {
  SpringContainer,
  FlowerContainer,
  FlowerImg,
  FlowerContainer2,
  FlowerContainer3,
} from "./styled";
import flower1 from "../../images/flower_1.png";
import flower2 from "../../images/flower_2.png";
import flower3 from "../../images/flower_3.png";
import flower4 from "../../images/flower_4.png";

const Spring = () => {
  return (
    <SpringContainer>
      <FlowerContainer>
        <FlowerImg left={"0%"} src={flower1} alt="flower" width="70" />
        <FlowerImg
          duration={"9s"}
          left={"30%"}
          src={flower2}
          alt="flower"
          width="70"
        />
        <FlowerImg
          duration={"17s"}
          left={"50%"}
          delay={"-10s"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"13s"}
          left={"70%"}
          src={flower4}
          delay={"-5s"}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"95%"} src={flower1} alt="flower" width="70" />
        <FlowerImg left={"85%"} src={flower2} alt="flower" width="70" />
        <FlowerImg left={"0%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          duration={"11s"}
          left={"60%"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg
          duration={"10s"}
          left={"95%%"}
          src={flower3}
          delay={"-5s"}
          alt="flower"
          width="35"
        />
        <FlowerImg left={"15%"} src={flower4} alt="flower" width="30" />
        <FlowerImg
          duration={"7s"}
          left={"65%"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"10s"}
          left={"90%"}
          delay={"-5s"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"50%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          left={"35%"}
          duration={"7s"}
          src={flower4}
          alt="flower"
          width="30"
        />
      </FlowerContainer>
      <FlowerContainer2>
        <FlowerImg left={"0%"} src={flower1} alt="flower" width="70" />
        <FlowerImg
          duration={"9s"}
          left={"30%"}
          src={flower2}
          alt="flower"
          width="70"
        />
        <FlowerImg
          duration={"17s"}
          left={"50%"}
          delay={"-10s"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"13s"}
          left={"70%"}
          src={flower4}
          delay={"-5s"}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"95%"} src={flower1} alt="flower" width="70" />
        <FlowerImg left={"85%"} src={flower2} alt="flower" width="70" />
        <FlowerImg left={"0%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          duration={"11s"}
          left={"60%"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg
          duration={"10s"}
          left={"95%%"}
          src={flower3}
          delay={"-5s"}
          alt="flower"
          width="35"
        />
        <FlowerImg left={"15%"} src={flower4} alt="flower" width="30" />
        <FlowerImg
          duration={"7s"}
          left={"65%"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"10s"}
          left={"90%"}
          delay={"-5s"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"50%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          left={"35%"}
          duration={"7s"}
          src={flower4}
          alt="flower"
          width="30"
        />
      </FlowerContainer2>
      <FlowerContainer3>
        <FlowerImg left={"0%"} src={flower1} alt="flower" width="70" />
        <FlowerImg
          duration={"9s"}
          left={"30%"}
          src={flower2}
          alt="flower"
          width="70"
        />
        <FlowerImg
          duration={"17s"}
          left={"50%"}
          delay={"-10s"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"13s"}
          left={"70%"}
          src={flower4}
          delay={"-5s"}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"95%"} src={flower1} alt="flower" width="70" />
        <FlowerImg left={"85%"} src={flower2} alt="flower" width="70" />
        <FlowerImg left={"0%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          duration={"11s"}
          left={"60%"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg
          duration={"10s"}
          left={"95%%"}
          src={flower3}
          delay={"-5s"}
          alt="flower"
          width="35"
        />
        <FlowerImg left={"15%"} src={flower4} alt="flower" width="30" />
        <FlowerImg
          duration={"7s"}
          left={"65%"}
          src={flower3}
          alt="flower"
          width="35"
        />
        <FlowerImg
          duration={"10s"}
          left={"90%"}
          delay={"-5s"}
          src={flower4}
          alt="flower"
          width="30"
        />
        <FlowerImg left={"50%"} src={flower3} alt="flower" width="35" />
        <FlowerImg
          left={"35%"}
          duration={"7s"}
          src={flower4}
          alt="flower"
          width="30"
        />
      </FlowerContainer3>
    </SpringContainer>
  );
};

export default Spring;
