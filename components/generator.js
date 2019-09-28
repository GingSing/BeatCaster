AFRAME.registerComponent("generator", {
  schema: {
    totalTime: { type: "int", default: 0 },
    i: { type: "int", default: 0 }
  },
  init: function() {
    for (let i of beatMap.notes) {
      gameState.generatedObjects.push(
        this.generateCircle({
          position: {
            x: this.generateRandomNumber(15),
            y: this.generateRandomNumber(15),
            z: -30
          },
          attributes: ["disappearonclick", "shrink"],
          classes: []
        })
      );
    }
    addClickable();
  },
  update: function() {},
  tick: function(time, deltaTime) {
    let el = this.el;
    let data = this.data;
    data.totalTime += deltaTime;
    //gamestate
    if (beatMap.notes[data.i] && data.totalTime > beatMap.notes[data.i].time) {
      el.sceneEl.appendChild(
        gameState.generatedObjects[gameState.currentShownNum]
      );
      gameState.currentShownNum++;
      data.i++;
    }
  },
  generateCircle: function(info) {
    let self = this;
    let { position, color, attributes, classes } = info;

    let text = document.createElement("a-text");
    text.setAttribute("value", gameState.beatNum);
    text.setAttribute("color", "white");
    text.setAttribute("align", "center");
    text.setAttribute("wrap-count", "1");

    let circle = document.createElement("a-circle");
    circle.setAttribute("material", {
      color
    });
    circle.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });
    //gamestate
    circle.setAttribute("num", gameState.beatNum++);
    for (let attribute of attributes) {
      circle.setAttribute(`${attribute}`, "");
    }

    for (let extraClass of classes) {
      circle.classList.add(`${extraClass}`);
    }
    circle.appendChild(text);
    return circle;
  },
  generateRandomNumber: function(initNum) {
    let num = Math.floor(Math.random() * initNum) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }
});
