AFRAME.registerComponent("changehorizoncolor", {
  remove: function() {
    let el = this.el;
    let data = this.data;

    let score = gameState.score;

    if (score < 1000) {
      // teal
      this.lightHorizon("#7FFFD4");
    } else if (score < 2000) {
      // blue
      this.lightHorizon("#2196F3");
    } else if (score < 3000) {
      // green
      this.lightHorizon("#4CAF50");
    } else if (score < 4000) {
      // deep purple
      this.lightHorizon("#512DA8");
    } else if (score < 5000) {
      // red
      this.lightHorizon("#D32F2F");
    } else if (score < 6000) {
      // orange
      this.lightHorizon("#FF5722");
    }
  },
  lightHorizon: function(color) {
    let background = document.getElementById("background");
    let sky = background.children[4];
    let skyAttr = sky.getAttribute("material");
    if (background.getAttribute("environment").horizonColor !== color) {
      background.setAttribute("environment", {
        horizonColor: color,
        gridColor: color,
        fog: 0.9
      });

      sky.setAttribute("material", {
        ...skyAttr,
        side: "back",
        color: "#FFF"
      });
    }
  }
});
