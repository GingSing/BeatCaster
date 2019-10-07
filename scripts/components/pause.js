AFRAME.registerComponent("pause", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      // el.sceneEl.components.generator.pause();
      pauseGame();
      let playBtn = document.getElementById("start");
      playBtn.setAttribute("visible", true);
    });
  }
});
