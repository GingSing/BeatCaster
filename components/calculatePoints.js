AFRAME.registerComponent("calculatepoints", {
  schema: {},
  init: function() {
    this.calculatePointsByRadius = radius => {
      if (radius < 7 && radius > 5) {
        gameState.score += 30;
      } else {
        gameState.score += 10;
      }
    };
  },
  update: function() {
    const el = this.el;
    el.addEventListener("click", () => this.calculatePointsByRadius(el.radius));
  },
  tick: function() {},
  remove: function() {
    const el = this.el;
    el.removeEventListener("click", () =>
      this.calculatePointsByRadius(el.radius)
    );
  }
});
