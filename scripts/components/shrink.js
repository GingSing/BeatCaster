AFRAME.registerComponent("shrink", {
  tick: function(time, deltaTime) {
    let el = this.el;
    let radius = el.getAttribute("width");

    if (gameState.isPlaying) {
      if (radius > constants.SMALLEST_RADIUS) {
        this.decreaseRadius(deltaTime);
      } else {
        if (el.sceneEl.contains(el)) {
          el.sceneEl.removeChild(el);
        }
      }

      let maxPerfectRadius =
        constants.PERFECT_RADIUS + constants.PERFECT_RADIUS_OFFSET;
      let minPerfectRadius =
        constants.PERFECT_RADIUS - constants.PERFECT_RADIUS_OFFSET;
      if (
        (radius > maxPerfectRadius || radius < minPerfectRadius) &&
        radius > constants.SMALLEST_RADIUS
      ) {
        el.setAttribute("color", "red");
      } else if (radius < maxPerfectRadius && radius > minPerfectRadius) {
        el.setAttribute("color", "red");
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
