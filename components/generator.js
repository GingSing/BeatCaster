AFRAME.registerComponent("generator", {
  schema: {},
  init: function() {
    const self = this;
    self.el.sceneEl.addEventListener("click", () => {
      let ring = document.createElement("a-ring");
      // ring.setAttribute("geometry", {
      //   primitive: "ring"
      // });
      ring.setAttribute("material", {
        color: "red"
      });
      ring.setAttribute("position", {
        x: 0,
        y: 0,
        z: -5
      });

      let circle = document.createElement("a-circle");
      circle.setAttribute("material", {
        color: "blue"
      });
      ring.setAttribute("shrink", "");
      ring.appendChild(circle);
      self.el.sceneEl.appendChild(ring);
    });
  },
  update: function() {},
  tick: function() {}
});
