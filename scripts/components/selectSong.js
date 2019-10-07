AFRAME.registerComponent("selectsong", {
  schema: {
    visible: {
      type: "boolean",
      default: false
    }
  },
  init: function() {},
  update: function() {
    let el = this.el;

    el.addEventListener("mousedown", () => this.selectSong(el));
  },
  tick: function() {
    let data = this.data;
    let el = this.el;

    let parentElVisible = el.parentEl.getAttribute("visible");

    if (data.visible !== parentElVisible) {
      if (parentElVisible) {
        el.classList.add("clickable");
      } else if (!parentElVisible) {
        el.classList.remove("clickable");
      }
      data.visible = parentElVisible;
    }
  },
  selectSong: function(el) {
    let songName = el.getAttribute("value");
    changeSong(songName);
    getLeaderBoard(songName);
    console.log(leaderBoard);
    el.sceneEl.setAttribute("generator", gameState.currentSong);
    resumeGame();
    el.parentEl.setAttribute("visible", false);
  }
});
