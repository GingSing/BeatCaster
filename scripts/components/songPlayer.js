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
      data.isPlaying = true;
      audio.components.sound.playSound();
    } else if (!gameState.isPlaying & data.isPlaying) {
      data.isPlaying = false;
      audio.components.sound.pauseSound();
    }
  }
});
