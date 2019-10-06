AFRAME.registerComponent("scaleonhover", {
  schema: {
    default: ""
  },
  init: function() {
    let data = this.data;
    let el = this.el;
    el.addEventListener("mouseenter", () => {
      el.object3D.scale.set(1.2, 1.2, 1);
    });
    el.addEventListener("mouseleave", () => {
      el.object3D.scale.set(1, 1, 1);
    });
  }
});
