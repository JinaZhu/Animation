// parameter is the section you want to go to and the time it take to get there
function smoothScroll(target, duration) {
  const targeted = document.querySelector(target);
  // element position
  const targetPosition = targeted.getBoundingClientRect().top;
  // windown y position
  const startingPosition = window.pageYOffset;
  const distance = targetPosition - startingPosition;
  var startTime = null;

  // currentime is a counter that keep track of the time when the page load
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startingPosition, distance, duration);
    // first parameter is horzonially and second is vertically
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
  }
  // make animation and transition smooth
  requestAnimationFrame(animation);
}

// event listeners
const section1 = document.querySelector(".section1");
section1.addEventListener("click", function () {
  smoothScroll(".section2", 1000);
});

const section2 = document.querySelector(".section2");
section2.addEventListener("click", function () {
  smoothScroll(".section1", 1000);
});
