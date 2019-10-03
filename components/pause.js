AFRAME.registerComponent("pause", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      el.sceneEl.components.generator.pause();
      pauseGame();
      let playBtn = document.getElementById("#play");
      playBtn.setAttribute("visible", true);
      playBtn.classList.add("clickable");
    });
  }
});
