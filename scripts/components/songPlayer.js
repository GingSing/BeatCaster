AFRAME.registerComponent("songplayer", {
  schema: {
    currentSong: {
      type: "string",
      default: ""
    },
    isPlaying: {
      type: "boolean",
      default: false
    }
  },
  tick: function() {
    let audio = this.el;
    let data = this.data;

    if (gameState.isPlaying && !data.isPlaying) {
      setTimeout(() => audio.components.sound.playSound(), 47);
    } else if (!gameState.isPlaying & data.isPlaying) {
      setTimeout(() => audio.components.sound.pauseSound(), 47);
    }

    if (gameState.isPlaying && !data.isPlaying) {
      data.isPlaying = true;
    } else if (!gameState.isPlaying & data.isPlaying) {
      data.isPlaying = false;
    }
  }
});
