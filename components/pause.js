AFRAME.registerComponent("pause", {
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      el.sceneEl.components.generator.pause();
      pauseGame();
      el.sceneEl.setAttribute("menu", {});
    });
  }
});
