AFRAME.registerComponent("pause", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      // el.sceneEl.components.generator.pause();
      pauseGame();
      let playBtn = document.getElementById("start");
      let resumeBtn = document.getElementById("resumeBtn");
      playBtn.setAttribute("visible", true);
      resumeBtn.setAttribute("visible", true);
    });
  }
});
