AFRAME.registerComponent("play", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      // el.sceneEl.components.generator.play();
      if (!el.sceneEl.components.generator) {
        el.sceneEl.setAttribute("generator", gameState.currentSong);
      }
      resumeGame();
      el.parentEl.setAttribute("visible", false);
    });
  }
});
