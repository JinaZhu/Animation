Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function () {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },
  // effect for fading out
  fadeOut: function () {},
  // effect for fading in
  fadeIn: function () {
    // take the newcontainer and add a class of slide-in
    this.newContainer.classList.add("slide-in");
    // add an event listener to listen for when the animation end and remove the slide in class
    // without, it will animation back to the original page
    this.newContainer.addEventListener("animationend", () => {
      this.newContainer.classList.remove("slide-in");
      this.done();
    });
  },
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function () {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
