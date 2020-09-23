function imageGallery() {
  // select the main image and the small preview images
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".dress-preview img");

  // for each of the preview images, add an event listener and listen for a click
  previews.forEach((preview) => {
    // don't use es6 or it will not bind
    preview.addEventListener("click", function () {
      // on click get the selected image src
      const smallSrc = this.src;
      // replace the main image src with the selected
      highlight.src = smallSrc;
      // remove the class of dress-active(opacity) from any preview images
      previews.forEach((preview) => preview.classList.remove("dress-active"));
      // add the class dress-active to the selected preview image
      preview.classList.add("dress-active");
    });
  });
}

imageGallery();
