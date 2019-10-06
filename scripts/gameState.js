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

let leaderBoard = {};

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
