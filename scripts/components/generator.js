AFRAME.registerComponent("generator", {
  schema: {
    i: {
      type: "int",
      default: 0
    },
    elapsedTime: {
      type: "int",
      default: 0
    },
    currentSong: {
      type: "string",
      default: ""
    }
  },
  init: function() {
    // this.generateNotes(beatMap, gameState);
  },
  update: function() {
    let data = this.data;
    gameState.generated = false;
    this.generateNotes(beatMap, gameState);
    data.elapsedTime = 0;
    data.i = 0;
    gameState.generated = true;
  },
  tick: function(time, deltaTime) {
    let el = this.el;
    let data = this.data;
    if (gameState.isPlaying) {
      data.elapsedTime += deltaTime;
      //gamestate
      if (
        beatMap.notes[data.i] &&
        data.elapsedTime > beatMap.notes[data.i].time - 290
      ) {
        el.sceneEl.appendChild(
          gameState.generatedObjects[gameState.currentShownNum]
        );
        gameState.currentShownNum++;
        data.i++;
      }
    }
  },
  generateNotes: function(beatMap, gameState) {
    for (let i in beatMap.notes) {
      gameState.generatedObjects.push(
        this.generateRing({
          position: {
            x: beatMap.notes[i].position
              ? beatMap.notes[i].position.x
              : this.generateRandomNumber(15),
            y: beatMap.notes[i].position
              ? beatMap.notes[i].position.y
              : this.generateRandomPositive(15) + 4,
            z: -30
          },
          rotation: {
            x: beatMap.notes[i].position
              ? beatMap.notes[i].position.y > 20
                ? 30
                : 0
              : 0,
            y: beatMap.notes[i].position
              ? beatMap.notes[i].position.x > 20
                ? -30
                : beatMap.notes[i].position.x < -20
                ? 30
                : 0
              : 0,
            z: 0
          },
          color: "#000",
          radius: constants.LARGEST_RADIUS,
          //will do ->
          attributes: [
            "disappearonclick",
            "shrink",
            "givepoints",
            "changecolor",
            "increasebeatnumonremove",
            "spawnreversecircle",
            "hitsound",
            "removeonnewgame",
            "changehorizoncolor"
          ],
          classes: []
        })
      );
    }
  },
  generateCircle: function(info) {
    let { position, rotation, color, radius } = info;

    let text = document.createElement("a-text");
    text.setAttribute("value", gameState.beatNum);
    text.setAttribute("color", "white");
    text.setAttribute("align", "center");
    text.setAttribute("wrap-count", "3");
    text.setAttribute("position", {
      x: 0,
      y: 0,
      z: 0.1
    });

    let circle = document.createElement("a-circle");
    circle.setAttribute("material", {
      color,
      shader: "flat"
    });
    circle.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z - 0.1
    });

    circle.setAttribute("rotation", {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z
    });
    circle.setAttribute("radius", radius);
    //gamestate
    circle.setAttribute("num", gameState.beatNum);
    circle.appendChild(text);
    return circle;
  },
  generateRing: function(info) {
    let { position, rotation, color, radius, attributes, classes } = info;

    // let text = document.createElement("a-text");
    // text.setAttribute("value", gameState.beatNum);
    // text.setAttribute("color", "white");
    // text.setAttribute("align", "center");
    // text.setAttribute("wrap-count", "3");

    let ring = document.createElement("a-image");
    ring.setAttribute("src", "#ring");
    ring.setAttribute("material", {
      color,
      shader: "flat"
    });
    ring.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });

    ring.setAttribute("rotation", {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z
    });
    ring.setAttribute("width", radius);
    ring.setAttribute("height", radius);
    //gamestate
    ring.setAttribute("num", gameState.beatNum++);
    for (let attribute of attributes) {
      ring.setAttribute(`${attribute}`, "");
    }

    for (let extraClass of classes) {
      ring.classList.add(`${extraClass}`);
    }

    let circle = this.generateCircle({
      ...info,
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      radius: constants.PERFECT_RADIUS / 2
    });
    ring.appendChild(circle);
    // ring.appendChild(text);
    return ring;
  },
  generateRandomNumber: function(initNum) {
    let num = Math.floor(Math.random() * initNum) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  },
  generateRandomPositive: function(initNum) {
    let num = Math.floor(Math.random() * initNum) + 1;
    return num;
  }
});
