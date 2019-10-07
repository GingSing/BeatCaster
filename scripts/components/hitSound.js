AFRAME.registerComponent("hitsound", {
  init: function() {
    let el = this.el;
    let data = this.data;
  },
  update: function() {
    let el = this.el;
    let data = this.data;
    let sfx = document.getElementById("sfx");

    el.addEventListener("mousedown", () => {
      sfx.components.sound.playSound();
    });
  }
});
