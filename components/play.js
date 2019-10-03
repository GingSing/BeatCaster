AFRAME.registerComponent("play", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      el.sceneEl.components.generator.play();
      resumeGame();
    });
  }
});
