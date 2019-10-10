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
    let sky = background.children[4];
    let skyAttr = sky.getAttribute("material");
    background.setAttribute("environment", {
      horizonColor: this.getRandomColor(),
      fog: 0.9
    });
    sky.setAttribute("material", {
      ...skyAttr,
      side: "back",
      color: "#FFF"
    });
  },
  getRandomColor: function() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
