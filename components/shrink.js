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

    this.eventHandlerFn = function() {
      console.log(self.el.getAttribute("radius"));
    };
  },
  update: function(oldData) {
    let data = this.data;
    let el = this.el;
    el.addEventListener("click", this.eventHandlerFn);
    console.log(oldData, data);
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
      data.radius -= data.radius / 70;
      el.setAttribute("radius-outer", data.radius);
      el.setAttribute("radius-inner", data.radius - data.radius / 10);
    } else {
      el.setAttribute("visible", false);
    }
  }
});
