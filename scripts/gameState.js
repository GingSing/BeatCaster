const initializeSongs = async function() {
  return await fetch("http://localhost:5000/songs")
    .then(res => res.json())
    .then(data => data);
};

let songs = initializeSongs();

// songs.then(function(result) {
//   // get the song data so we know what to reference
//   console.log(result);
// });

let gameState = {
  currentSong: "",
  generatedObjects: [],
  beatNum: 0,
  currentBeatNum: 0,
  currentShownNum: 0,
  score: 0,
  generated: false,
  isPlaying: false
};

const increaseBeatNum = () => {
  gameState.currentBeatNum++;
};

const resumeGame = () => {
  gameState.isPlaying = true;
};

const pauseGame = () => {
  gameState.isPlaying = false;
};

const resetGameState = () => {
  gameState = {
    generatedObjects: [],
    beatNum: 0,
    currentBeatNum: 0,
    currentShownNum: 0,
    score: 0,
    generated: false,
    isPlaying: false
  };
};

const changeSong = newSong => {
  gameState.currentSong = newSong;
};

const getLeaderBoard = song => {
  io.emit("selectSong", song);
};
