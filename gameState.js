let gameState = {
  generatedObjects: [],
  beatNum: 0,
  currentBeatNum: 0,
  currentShownNum: 0,
  score: 0,
  generated: false
};

const increaseBeatNum = () => {
  gameState.currentBeatNum++;
};
