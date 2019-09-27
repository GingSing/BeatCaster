AFRAME.registerComponent("shrink", {
  schema: {
    radius: { type: "int", default: 20 }
  },
  init: function() {
    const self = this;
    self.el.setAttribute("radius-outer", self.data.radius);
    self.el.setAttribute(
      "radius-inner",
      self.data.radius - self.data.radius / 10
    );

    console.log(document.querySelector("a-circle"));

    this.eventHandlerFn = function() {
      console.log(self.el.getAttribute("radius-inner"));
    };
  },
  update: function(oldData) {
    let data = this.data;
    let el = this.el;
    el.addEventListener("click", this.eventHandlerFn);
  },
  tick: function(time, deltaTime) {
    let data = this.data;
    let el = this.el;

    if (data.radius < 7 && data.radius > 5) {
      el.setAttribute("color", "blue");
    } else {
      el.setAttribute("color", "red");
    }

    if (data.radius > 3) {
      this.decreaseRadius(deltaTime);
    } else {
      el.setAttribute("visible", false);
    }
  },
  decreaseRadius: function(deltaTime) {
    let data = this.data;
    let el = this.el;

    data.radius -= (1 * data.radius * deltaTime) / 1000;
    el.setAttribute("radius-outer", data.radius);
    el.setAttribute("radius-inner", data.radius - data.radius / 10);
  }
});
