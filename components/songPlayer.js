AFRAME.registerComponent("songplayer", {
  schema: {},
  init: function() {
    const listener = new THREE.AudioListener();
    console.log(this.el.sceneEl);
    this.el.sceneEl.camera.add(listener);

    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("song.mp3", buffer => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });

    this.playAudio = audio => {
      console.log("play");
      audio.play();
    };
    this.pauseAudio = audio => {
      console.log("pause");
      audio.pause();
    };
  },
  update: function() {
    let el = this.el;
    let audio = this.el;
    // el.addEventListener("play", () => this.playAudio(audio));
  },
  tick: function(time, deltaTime) {
    let data = this.data;
    // if (gameState.generated && data.currentSong !== gameState.currentSong) {
    //   data.currentSong = gameState.currentSong;
    //   document.getElementById("song").play();
    // }
  }
});
