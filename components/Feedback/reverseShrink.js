AFRAME.registerComponent("reverseshrink", {
  tick: function(time, deltaTime) {
    let el = this.el;
    let radius = el.getAttribute("width");

    if (gameState.isPlaying) {
      if (radius < 30) {
        // this.increaseRadius(deltaTime);
      } else {
        if (el.sceneEl.contains(el)) {
          el.sceneEl.removeChild(el);
        }
      }
    }
  }
});
