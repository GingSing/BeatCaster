AFRAME.registerComponent("play", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      console.log("hi");
      // el.sceneEl.components.generator.play();
      if (!el.sceneEl.components.generator) {
        el.sceneEl.setAttribute("generator", gameState.currentSong);
      }
      resumeGame();
      el.setAttribute("visible", false);
      el.classList.remove("clickable");
    });
  }
});
