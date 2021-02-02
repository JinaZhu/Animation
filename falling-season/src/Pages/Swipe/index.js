import React from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";
import "../../index.css";

import { Card } from "./styled";

const Swipe = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  };
  return (
    <Swiper {...params}>
      <Card>
        <p>slide 1</p>
      </Card>
      <Card>
        <p>slide 2</p>
      </Card>
      <Card>
        <p>slide 3</p>
      </Card>
    </Swiper>
  );
};

export default Swipe;

//notes:
// npm install -s swiper@5.4.2 react-id-swiper
// to remove card shadow, remove style from swiper.css
