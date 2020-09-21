const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//keep track of the current slide
let counter = 1;
// get the size of the image's width
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//button listeners
nextBtn.addEventListener("click", () => {
  // return the first image, for fast clicking
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  // increase the slide position width to be where the current item is with the width of each previous image
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// when slide reach end
carouselSlide.addEventListener("transitionend", () => {
  // when the carousel reach lastClone, loop it back to the end vise versa with firstclone
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// console.log(counter);
