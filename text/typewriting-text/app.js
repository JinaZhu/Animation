const texts = ["take photos", "edit photos", "post photos"];
//keep tracker of current item in texts
let count = 0;
// keep tracker of the current letter of our current word
let index = 0;

let currentText = "";
let letter = "";
// invoke the function immediately
(function typeEffect() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  // move over every letter of currentText
  letter = currentText.slice(0, ++index);
  //display in class typing
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(typeEffect, 400);
})();
