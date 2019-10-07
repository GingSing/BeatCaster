AFRAME.registerComponent("songui", {
  init: async function() {
    let el = this.el;
    await fetch("http://localhost:5000/songs")
      .then(res => res.json())
      .then(data => {
        songs = { ...data };
        for (let songNum in songs) {
          console.log(songNum);
          this.generateSongUi(songs[songNum], songNum, el);
        }
      });
  },
  // used to set the values of the song that is selected to the UI
  generateSongUi: function(song, songPosition, el) {
    el.setAttribute("value", `${song.name}`);
    el.setAttribute("src", `${song.image}`);
    console.log(el);
    el.setAttribute("songnumber", `${songPosition}`);
  }
});
