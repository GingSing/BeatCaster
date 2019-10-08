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
  init: function() {
    // this.playAudio = audio => {
    //   console.log("play");
    //   if (!gameState.isPlaying) {
    //     audio.play();
    //   }
    // };
    // this.pauseAudio = audio => {
    //   console.log("pause");
    //   if (gameState.isPlaying) {
    //     audio.pause();
    //   }
    // };
  },
  update: function() {
    // audio.addEventListener("playAudio", () => this.playAudio(audio));
    // audio.addEventListener("pauseAudio", () => this.pauseAudio(audio));
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
