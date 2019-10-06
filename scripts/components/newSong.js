AFRAME.registerComponent("start", {
  init: function() {
    this.el.addEventListener("mousedown", () => {
      el.sceneEl.setAttribute("generator", {
        currentSong: gameState.currentSong
      });
      resumeGame();
    });
  }
});
