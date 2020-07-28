// grad the element
const text = document.querySelector(".fancy");
// get the text
const strText = text.textContent;
// turn text into an array
const splitText = strText.split("");
// set element text to be nothing
text.textContent = "";

// add a span to each letter
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
// every two .2 seconds, run  onTick function
let timer = setInterval(onTick, 200);

// animation the letter at the char index
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  // when the char reach the last letter, call the complete function
  if (char === splitText.length) {
    complete();
    return;
  }
}

// stop the animation
function complete() {
  clearInterval(timer);
  timer = null;
}
