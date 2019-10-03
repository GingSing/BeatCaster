AFRAME.registerComponent("pause", {
  init: function() {
    this.el.addEventListener("click", () => {
      if (this.el.sceneEl.isPlaying) {
        this.el.sceneEl.pause();
      } else {
        this.el.sceneEl.play();
      }
    });
  },
  pause: function() {
    this.el.addEventListener("click", () => {
      this.el.sceneEl.play();
    });
  }
});
