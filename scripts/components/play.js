AFRAME.registerComponent("play", {
  schema: {
    visible: {
      type: "boolean",
      default: false
    }
  },
  init: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => {
      let songSelect = document.getElementById("start");
      songSelect.setAttribute("visible", false);
      resumeGame();
      el.setAttribute("visible", false);
    });
  },
  tick: function() {
    let data = this.data;
    let el = this.el;

    let elVisible = el.getAttribute("visible");

    if (data.visible !== elVisible) {
      if (elVisible) {
        el.classList.add("clickable");
      } else if (!elVisible) {
        el.classList.remove("clickable");
      }
      data.visible = elVisible;
    }
  }
});
