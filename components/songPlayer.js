AFRAME.registerComponent("songplayer", {
  schema: {
    currentSong: {
      type: "string",
      default: ""
    }
  },
  init: function() {
    this.playAudio = audio => {
      console.log("play");
      if (!gameState.isPlaying) {
        audio.play();
      }
    };
    this.pauseAudio = audio => {
      console.log("pause");
      if (gameState.isPlaying) {
        audio.pause();
      }
    };
  },
  update: function() {
    let audio = this.el;
    audio.addEventListener("playAudio", () => this.playAudio(audio));
    audio.addEventListener("pauseAudio", () => this.pauseAudio(audio));
  }
});
