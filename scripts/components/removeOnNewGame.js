AFRAME.registerComponent("removeonnewgame", {
  schema: {
    currentUserId: {
      type: "string",
      default: ""
    }
  },
  init: function() {
    let data = this.data;
    data.currentUserId = gameState.user_id;
  },
  tick: function() {
    let data = this.data;
    let el = this.el;
    if (data.currentUserId !== gameState.user_id) {
      if (el.sceneEl.contains(el)) {
        el.sceneEl.removeChild(el);
      }
    }
  }
});
