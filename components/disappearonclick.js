AFRAME.registerComponent("disappearonclick", {
  schema: {},
  init: function() {
    let el = this.el;
    this.disappear = () => {
      //gamestate
      if (gameState.currentBeatNum == el.getAttribute("num")) {
        increaseBeatNum();
        addClickable();
        el.sceneEl.removeChild(el);
      }
    };
  },
  update: function() {
    const el = this.el;
    el.addEventListener("click", this.disappear);
  },
  remove: function() {
    let el = this.el;
    el.removeEventListener("click", this.disappear);
  }
});
