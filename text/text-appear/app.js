function scrollAppear() {
  const introText = document.querySelector(".intro-text");
  // top property of introtext
  const introPosition = introText.getBoundingClientRect().top;
  // how big the screen is
  const screenPosition = window.innerHeight / 2;
  console.log(screenPosition);

  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
