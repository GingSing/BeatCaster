AFRAME.registerComponent("disappearonclick", {
  init: function() {
    let el = this.el;
    this.disappear = () => {
      if (gameState.currentBeatNum == el.getAttribute("num")) {
        increaseBeatNum();
        console.log(el.getAttribute("width"));
        el.sceneEl.removeChild(el);
      } else {
        el.sceneEl.removeChild(el);
      }
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
