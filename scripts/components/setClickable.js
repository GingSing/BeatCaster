AFRAME.registerComponent("setclickable", {
  schema: {
    currentNum: {
      type: "int",
      default: -1
    },
    isPlaying: {
      type: "boolean",
      default: false
    }
  },
  init: function() {
    let data = this.data;

    //in case game doesn't start at 0
    // this.setNextClickable(gameState, data);
  },
  tick: function() {
    let data = this.data;
    if (gameState.currentBeatNum !== data.currentNum && gameState.isPlaying) {
      data.currentNum = gameState.currentBeatNum;
      this.setNextClickable(gameState, data);
    }

    if (!gameState.isPlaying && data.isPlaying) {
      //remove clickable
      if (gameState.generatedObjects[data.currentNum]) {
        gameState.generatedObjects[data.currentNum].classList.remove(
          "clickable"
        );
      }
      data.isPlaying = false;
    } else if (gameState.isPlaying && !data.isPlaying) {
      this.setNextClickable(gameState, data);
      data.isPlaying = true;
    }
  },
  setNextClickable: function(gameState, data) {
    if (gameState.generatedObjects[data.currentNum]) {
      gameState.generatedObjects[data.currentNum].classList.add("clickable");
    }
  }
});
