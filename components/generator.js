AFRAME.registerComponent("generator", {
  schema: {
    totalTime: { type: "int", default: 0 },
    i: { type: "int", default: 0 }
  },
  init: function() {},
  update: function() {},
  tick: function(time, deltaTime) {
    let data = this.data;
    let beatMap = {
      notes: [
        { time: 1000 },
        { time: 1500 },
        { time: 2000 },
        { time: 4000 },
        { time: 4300 },
        { time: 4300 },
        { time: 5000 },
        { time: 6000 },
        { time: 7000 }
      ]
    };
    data.totalTime += deltaTime;
    //gamestate
    if (beatMap.notes[data.i] && data.totalTime > beatMap.notes[data.i].time) {
      gameState.generatedObjects.push(
        this.generateCircle({
          position: {
            x: this.generateRandomNumber(15),
            y: this.generateRandomNumber(15),
            z: -30
          },
          attributes: ["disappearonclick", "shrink"],
          classes: ["clickable"]
        })
      );
      data.i++;
    }
  },
  generateCircle: function(info) {
    let self = this;
    let { position, color, attributes, classes } = info;

    let text = document.createElement("a-text");
    text.setAttribute("value", gameState.beatNum);
    text.setAttribute("color", "white");
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
    self.el.sceneEl.appendChild(circle);
    return circle;
  },
  generateRandomNumber: function(initNum) {
    let num = Math.floor(Math.random() * initNum) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }
});
