AFRAME.registerComponent("generator", {
  schema: {
    i: {
      type: "int",
      default: 0
    },
    elapsedTime: {
      type: "int",
      default: 0
    }
  },
  init: function() {
    for (let i of beatMap.notes) {
      gameState.generatedObjects.push(
        this.generateRing({
          position: {
            x: this.generateRandomNumber(15),
            y: this.generateRandomNumber(15),
            z: -30
          },
          color: "red",
          radius: 5,
          //will do ->
          attributes: [
            "disappearonclick",
            "shrink",
            "givepoints",
            "changecolor"
          ],
          classes: []
        })
      );
    }
    console.log(gameState.generatedObjects);
  },
  tick: function(time, deltaTime) {
    let el = this.el;
    let data = this.data;
    data.elapsedTime += deltaTime;
    //gamestate
    if (
      beatMap.notes[data.i] &&
      data.elapsedTime > beatMap.notes[data.i].time
    ) {
      el.sceneEl.appendChild(
        gameState.generatedObjects[gameState.currentShownNum]
      );
      gameState.currentShownNum++;
      data.i++;
    }
  },
  generateCircle: function(info) {
    let { position, color, radius, attributes, classes } = info;

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
    circle.setAttribute("radius", radius);
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
  generateRing: function(info) {
    let { position, color, radius, attributes, classes } = info;

    let text = document.createElement("a-text");
    text.setAttribute("value", gameState.beatNum);
    text.setAttribute("color", "white");
    text.setAttribute("align", "center");
    text.setAttribute("wrap-count", "1");

    let ring = document.createElement("a-image");
    ring.setAttribute("src", "#ring");
    ring.setAttribute("material", {
      color
    });
    ring.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });
    ring.setAttribute("width", radius * 2);
    ring.setAttribute("height", radius * 2);
    //gamestate
    ring.setAttribute("num", gameState.beatNum++);
    for (let attribute of attributes) {
      ring.setAttribute(`${attribute}`, "");
    }

    for (let extraClass of classes) {
      ring.classList.add(`${extraClass}`);
    }
    ring.appendChild(text);
    console.log(ring);
    return ring;
  },
  generateRandomNumber: function(initNum) {
    let num = Math.floor(Math.random() * initNum) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }
});
