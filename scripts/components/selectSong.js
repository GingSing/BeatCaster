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
    let audio = document.getElementById("player");
    let songNum = el.children[0].getAttribute("songnumber");

    resetGameState();
    selectSong(songs[songNum]);
    el.sceneEl.setAttribute("generator", gameState.currentSong);
    audio.setAttribute("src", songs[songNum].url);
    audio.components.sound.stopSound();
    console.log("gamestate", gameState);
    resumeGame();
    el.parentEl.setAttribute("visible", false);
  }
});
