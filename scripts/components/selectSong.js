AFRAME.registerComponent("selectsong", {
  schema: {
    visible: {
      type: "boolean",
      default: false
    },
    soundLoaded: {
      type: "boolean",
      default: false
    }
  },
  init: function() {},
  update: function() {
    let el = this.el;

    el.addEventListener("mousedown", () => this.selectSong(el));
    el.addd;
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
  selectSong: function async(el) {
    let audio = document.getElementById("player");
    let songNum = el.getAttribute("songnumber");
    let endScreen = document.getElementById("endScreen");
    let menuPlane = document.getElementById("menuPlane");

    resetGameState();
    selectSong(songs[songNum]);
    el.sceneEl.setAttribute("generator", gameState.currentSong);
    audio.setAttribute("src", `#${songs[songNum].url}`);
    audio.components.sound.stopSound();
    if (endScreen.getAttribute("visible")) {
      endScreen.setAttribute("visible", false);
    }
    if (menuPlane.getAttribute("visible")) {
      menuPlane.setAttribute("visible", false);
    }
    resumeGame();
    el.parentEl.setAttribute("visible", false);
  }
});
