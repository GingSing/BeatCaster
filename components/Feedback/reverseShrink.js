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
  },
  increaseRadius: function(deltaTime) {
    let el = this.el;
    let radius = el.getAttribute("width");
    let opacity = el.getAttribute("opacity");
    console.log("increasing");
    el.setAttribute("opacity", 0.5);
    el.setAttribute("width", radius + (1 * deltaTime) / 1000);
    el.setAttribute("height", radius + (1 * deltaTime) / 1000);
  }
});
