AFRAME.registerComponent("leaderboard", {
  tick: function(time, deltaTime) {
    let el = this.el;
    //gamestate
    if (gameState.update) {
      this.updateCurrentLeaderScores(leaderBoard, el);
      gameState.update = false;
    }
  },
  // checkIfScoresAndNameSame: function(i) {
  //   return (
  //     leaderBoard[i].name !== this.leaderBoard[i].name &&
  //     leaderBoard[i].score !== this.leaderBoard[i].score
  //   );
  // },
  // checkAllLeaderScores: function(size) {
  //   for (let i = 0; i < size; i++) {
  //     if (!this.checkIfScoresAndNameSame(i)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // },
  updateCurrentLeaderScores: function(leaderBoard, el) {
    console.log(leaderBoard);
    for (let i = 0; i < 5; i++) {
      el.children[i].setAttribute(
        "value",
        `${leaderBoard[i].name} ${leaderBoard[i].totalScore}`
      );
      if (leaderBoard[i].user_id === gameState.user_id) {
        if (el.children[i].getAttribute("color") !== "DAA520") {
          el.children[i].setAttribute("color", "#DAA520");
        }
      } else {
        if (el.children[i].getAttribute("color") !== "#FFFAF1") {
          el.children[i].setAttribute("color", "#FFFAF1");
        }
      }
    }
  }
});
