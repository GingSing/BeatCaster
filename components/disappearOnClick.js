AFRAME.registerComponent("disappearonclick", {
  init: function() {
    let el = this.el;
    this.disappear = () => {
      el.sceneEl.removeChild(el);
    };
  },
  update: function() {
    let el = this.el;
    el.addEventListener("mousedown", this.disappear);
  },
  remove: function() {
    let el = this.el;
    el.removeEventListener("mousedown", this.disappear);
  }
});
