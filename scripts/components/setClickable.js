AFRAME.registerComponent("setclickable", {
  schema: {
    currentNum: {
      type: "int",
      default: 0
    }
  },
  init: function() {
    let data = this.data;

    //in case game doesn't start at 0
    this.setNextClickable(gameState, data);
    console.log(gameState.generatedObjects[data.currentNum]);
  },
  tick: function() {
    let data = this.data;
    if (gameState.currentBeatNum !== data.currentNum && gameState.isPlaying) {
      data.currentNum = gameState.currentBeatNum;
      this.setNextClickable(gameState, data);
    }
  },
  setNextClickable: function(gameState, data) {
    if (gameState.generatedObjects[data.currentNum]) {
      gameState.generatedObjects[data.currentNum].classList.add("clickable");
    }
  }
});
