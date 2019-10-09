AFRAME.registerComponent("pause", {
  schema: {
    isPlaying: {
      type: "boolean",
      default: false
    }
  },
  init: function() {
    let el = this.el;
    el.setAttribute("visible", false);
    el.addEventListener("mousedown", () => {
      pauseGame();
      let menu = document.getElementById("menuPlane");
      menu.setAttribute("visible", true);
      el.setAttribute("visible", false);
    });
  },
  tick: function() {
    let el = this.el;
    let data = this.data;
    if (gameState.isPlaying && !data.isPlaying) {
      el.setAttribute("visible", true);
      el.classList.add("clickable");
      data.isPlaying = false;
    } else if (!gameState.isPlaying && data.isPlaying) {
      el.setAttribute("visible", false);
      el.classList.remove("clickable");
      data.isPlaying = true;
    }
  }
});
