AFRAME.registerComponent("removeselftimer", {
  init: function() {
    let el = this.el;

    setTimeout(function() {
      el.sceneEl.removeChild(el);
    }, 200);
  }
});
