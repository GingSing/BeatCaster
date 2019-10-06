AFRAME.registerComponent("reverseshrink", {
  // use this is you want to grown an image (currently not used)
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
