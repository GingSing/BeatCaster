AFRAME.registerComponent("givepoints", {
  remove: function() {
    let el = this.el;
    let radius = el.getAttribute("width");
    let maxPerfectRadius =
      constants.PERFECT_RADIUS + constants.PERFECT_RADIUS_OFFSET;
    let minPerfectRadius =
      constants.PERFECT_RADIUS - constants.PERFECT_RADIUS_OFFSET;
    if (
      (radius > maxPerfectRadius || radius < minPerfectRadius) &&
      radius > constants.SMALLEST_RADIUS
    ) {
      console.log("The second one", radius);

      gameState.score += 10;
    } else if (radius < maxPerfectRadius && radius > minPerfectRadius) {
      console.log("The thrid one", radius);

      gameState.score += 30;
    } else {
      //   console.log(radius);
    }
  }
});
