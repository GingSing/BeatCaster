AFRAME.registerComponent("shrink", {
  tick: function(time, deltaTime) {
    let el = this.el;
    let radius = el.getAttribute("width");

    if (gameState.isPlaying) {
      if (radius > constants.SMALLEST_RADIUS) {
        this.decreaseRadius(deltaTime);
      } else {
        increaseBeatNum();
        if (el.sceneEl.contains(el)) {
          el.sceneEl.removeChild(el);
        }
      }
    }
  },
  decreaseRadius: function(deltaTime) {
    let el = this.el;
    let radius = el.getAttribute("width");

    el.setAttribute("width", radius - (1 * radius * deltaTime) / 1000);
    el.setAttribute("height", radius - (1 * radius * deltaTime) / 1000);
  }
});
