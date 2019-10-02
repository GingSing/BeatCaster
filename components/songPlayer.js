AFRAME.registerComponent("songplayer", {
  init: function() {},
  tick: function(time, deltaTime) {
    if (gameState.generated) {
      document.getElementById("song").play();
    }
  },
  playSong: function(audio) {
    // audio.play();
  }
});
