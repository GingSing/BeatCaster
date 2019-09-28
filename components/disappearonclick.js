AFRAME.registerComponent("disappearonclick", {
  schema: {},
  init: function() {
    let el = this.el;
    this.disappear = () => {
      //gamestate
      if (gameState.currentBeatNum == el.getAttribute("num")) {
        removeFirstGeneratedObjectFromGameState();
        increaseBeatNum();
        el.parentNode.removeChild(el);
      }
    };
  },
  update: function() {
    const el = this.el;
    el.addEventListener("click", this.disappear);
  }
});
