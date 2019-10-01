AFRAME.registerComponent("showbeam", {
  schema: {},
  init: function() {
    let el = this.el;
    this.showBeam = e => {
      console.log(e);
    };
  },
  update: function() {
    let el = this.el;

    el.addEventListener("raycaster-intersection", this.showBeam);
  },
  tick: function() {},
  remove: function() {}
});
