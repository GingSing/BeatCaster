AFRAME.registerComponent("changehorizoncolor", {
  remove: function() {
    let el = this.el;
    let data = this.data;

    let radius = el.getAttribute("width");
    if (radius > constants.SMALLEST_RADIUS) {
      this.lightHorizon("#7FFFD4");
    }
  },
  lightHorizon: function(color) {
    let background = document.getElementById("background");
    console.log(background.children);
    let innerSky = background.children[4];
    console.log(innerSky);
    innerSky.setAttribute("material", {
      shader: "standard"
    });
    console.log(innerSky);
    let backgroundEnv = background.getAttribute("environment");
    background.setAttribute("environment", {
      horizonColor: "#7FFFD4"
    });
  }
});
