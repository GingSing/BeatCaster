AFRAME.registerComponent("removebeam", {
  schema: {
    timeShown: {
      type: "int",
      default: 0
    }
  },
  tick: function(time, deltaTime) {
    let data = this.data;
    let el = this.el;

    data.timeShown += deltaTime;
    if (data.timeShown > 200) {
      el.sceneEl.removeChild(el);
    }
  }
});
