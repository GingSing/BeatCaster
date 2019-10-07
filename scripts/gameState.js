let songs = {};

let gameState = {
  currentSong: "",
  generatedObjects: [],
  beatNum: 0,
  currentBeatNum: 0,
  currentShownNum: 0,
  score: 0,
  user_id: "",
  name: "",
  song: "",
  generated: false,
  isPlaying: false
};

let leaderBoard;

const generateRandomId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
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
    currentSong: "",
    generatedObjects: [],
    beatNum: 0,
    currentBeatNum: 0,
    currentShownNum: 0,
    score: 0,
    user_id: "",
    name: "",
    song: "",
    generated: false,
    isPlaying: false
  };
};

const changeSong = newSong => {
  gameState.currentSong = newSong;
};

const getLeaderBoard = song => {
  socket.emit("selectSong", { song, user_id: generateRandomId() });
};

const selectSong = songInfo => {
  changeSong(songInfo.name);
  getLeaderBoard(songInfo.name);
  gameState.song = songInfo._id;
};

const setName = name => {
  gameState.name = name;
};

const setUserId = user_id => {
  gameState.user_id = user_id;
};
