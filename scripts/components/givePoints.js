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
      gameState.score += 10;
      updateHits("Good", 10);
    } else if (radius < maxPerfectRadius && radius > minPerfectRadius) {
      gameState.score += 30;
      updateHits("Goodest", 30);
    } else {
      updateHits("Not Good", 0);
    }
  }
});
