function backgroundChanger() {
  // this is connected to event listener
  // innerheight is the entire div size
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", backgroundChanger);
