const generateRandomId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

let songs = {};
let gameState;

const resetGameState = () => {
  gameState = {
    currentSong: "",
    generatedObjects: [],
    hits: [],
    beatNum: 0,
    currentBeatNum: 0,
    currentShownNum: 0,
    score: 0,
    user_id: generateRandomId(),
    name: "Anonymous",
    song_id: "",
    generated: false,
    isPlaying: false,
    update: false
  };
};

resetGameState();

const increaseBeatNum = () => {
  gameState.currentBeatNum++;
};

const resumeGame = () => {
  gameState.isPlaying = true;
};

const pauseGame = () => {
  gameState.isPlaying = false;
};

const changeSong = newSong => {
  gameState.currentSong = newSong;
};

const getLeaderBoard = song_id => {
  socket.emit("selectSong", { song_id, user_id: gameState.user_id });
};

const selectSong = songInfo => {
  changeSong(songInfo.name);
  getLeaderBoard(songInfo._id);
  gameState.song_id = songInfo._id;
};

const setName = name => {
  gameState.name = name;
};

const setUserId = user_id => {
  gameState.user_id = user_id;
};

const updateHits = (name, points) => {
  gameState.hits.push({
    name,
    points
  });
  socket.emit("update", {
    user_id: gameState.user_id,
    name: gameState.name,
    score: gameState.score
  });
};
