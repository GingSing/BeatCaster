AFRAME.registerComponent("songui", {
  init: function() {
    let el = this.el;
    let data = this.data;
    songs.then(result => {
      let allSongs = {};
      // get the song data so we know what to reference
      for (let song of result) {
        allSongs = { song };
      }
      this.generateSongUi(allSongs, el);
      return allSongs;
    });
  },
  // used to send the values of the song selection to the UI
  generateSongUi: function(songs, el) {
    console.log(songs.song);
    el.setAttribute("value", `${songs.song.name}`);
    el.setAttribute("src", `${songs.song.image}`);
  }
});
