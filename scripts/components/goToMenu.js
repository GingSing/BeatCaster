AFRAME.registerComponent("gotomenu", {
  schema: {
    visible: {
      type: "boolean",
      default: false
    }
  },
  update: function() {
    let el = this.el;
    el.addEventListener("mousedown", () => this.goToMenu(el));
  },
  tick: function() {
    let data = this.data;
    let el = this.el;

    let elVisible = el.parentEl.getAttribute("visible");

    if (data.visible !== elVisible) {
      if (elVisible) {
        el.classList.add("clickable");
      } else if (!elVisible) {
        el.classList.remove("clickable");
      }
      data.visible = elVisible;
    }
  },
  goToMenu: function(el) {
    el.parentEl.setAttribute("visible", false);
    let songSelect = document.getElementById("start");
    songSelect.setAttribute("visible", true);
  }
});
