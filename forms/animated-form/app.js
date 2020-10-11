function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      // check to see which input element we are on
      const input = arrow.previousElementSibling;
      // get the whole field
      const parent = arrow.parentElement;
      // next form
      const nextForm = parent.nextElementSibling;

      // check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      // get rid of animation after applied
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    error("#A45350");
  } else {
    error("#767964");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // check if the email match regex
  if (validation.test(email.value)) {
    return true;
    error("#767964");
  } else {
    error("#A45350");
  }
}

// fade in next form, fade out previous form
function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

// change background color
function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
