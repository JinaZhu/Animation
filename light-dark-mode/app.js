const moonPath =
  "M15 27.6011C15 42.789 27.5 55.1011 27.5 55.1011C12.3122 55.1011 0 42.789 0 27.6011C0 12.4133 12.3122 0.101135 27.5 0.101135C27.5 0.101135 15 12.4133 15 27.6011Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
  // anime.js
  // set up timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  // add different animations to timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      //increase time
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22, 22,22)" : "rgb(255,255,255)",
      },
      "-=700"
    );
  //switch from sun to moon and back
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
