AFRAME.registerComponent("shrink", {
  schema: {
    radius: { type: "int", default: 10 }
  },
  init: function() {
    let data = this.data;
    let el = this.el;
    el.setAttribute("radius", data.radius);
  },
  update: function(oldData) {},
  tick: function(time, deltaTime) {
    let data = this.data;
    let el = this.el;

    if (data.radius < 7 && data.radius > 5) {
      el.setAttribute("material", { color: "blue" });
    } else if (el.getAttribute("color") !== "blue") {
      el.setAttribute("material", { color: "red" });
    }

    if (data.radius > 3) {
      this.decreaseRadius(deltaTime);
    } else {
      removeFirstGeneratedObjectFromGameState();
      increaseBeatNum();
      el.parentNode.removeChild(el);
    }
  },
  decreaseRadius: function(deltaTime) {
    let data = this.data;
    let el = this.el;

    data.radius -= (1 * data.radius * deltaTime) / 1500;
    el.setAttribute("radius", data.radius);
  }
});
