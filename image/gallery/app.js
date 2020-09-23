function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".dress-preview img");

  previews.forEach((preview) => {
    // don't use es6 or it will not bind
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      highlight.src = smallSrc;
      previews.forEach((preview) => preview.classList.remove("dress-active"));
      preview.classList.add("dress-active");
    });
  });
}

imageGallery();
