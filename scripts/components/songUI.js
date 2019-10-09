AFRAME.registerComponent("songui", {
  init: async function() {
    let el = this.el;
    await fetch("/songs")
      .then(res => res.json())
      .then(data => {
        songs = { ...data };
        // for (let songNum in songs) {
        //   this.generateSongUi(songs[songNum], songNum, el);
        // }
        for (let i = 0; i < Object.keys(songs).length; i++) {
          this.generateSongUi(songs[i], i, el.children[i]);
        }
      });
  },
  // used to set the values of the song that is selected to the UI
  generateSongUi: function(song, songPosition, el) {
    el.setAttribute("songnumber", `${songPosition}`);
    el.children[1].setAttribute("value", `${song.name}`);
    el.children[0].setAttribute("src", `${song.image}`);
    el.children[2].setAttribute("value", `${song.artist}`);
  }
});
