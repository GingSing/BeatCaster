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
    // let audio = this.el;
    // audio.setAttribute("src", "song.mp3");
    // audio.addEventListener("playAudio", () => this.playAudio(audio));
    // audio.addEventListener("pauseAudio", () => this.pauseAudio(audio));
  },
  tick: function() {
    let audio = this.el;
    let data = this.data;
    if (gameState.isPlaying && !data.isPlaying) {
      console.log("play");
      data.isPlaying = true;
      audio.components.sound.playSound();
    } else if (!gameState.isPlaying & data.isPlaying) {
      console.log("pause");
      data.isPlaying = false;
      audio.components.sound.pauseSound();
    }
  }
});
