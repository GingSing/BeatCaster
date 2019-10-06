AFRAME.registerComponent("showscore", {
  schema: {
    currentShownScore: { type: "int", default: 0 }
  },
  init: function() {
    let el = this.el;
    this.setScore(el);
  },
  tick: function() {
    let el = this.el;
    let data = this.data;
    if (data.currentShownScore !== gameState.score) {
      this.setScore(el);
    }
  },
  setScore: function(el) {
    el.setAttribute("value", `Score: ${gameState.score}`);
  }
});
