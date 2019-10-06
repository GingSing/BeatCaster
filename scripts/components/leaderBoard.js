AFRAME.registerComponent("leaderboard", {
  tick: function(time, deltaTime) {
    let el = this.el;
    //gamestate
    if (leaderBoard !== this.leaderBoard) {
      el.appendChild(createAllElements(leaderBoard));
      this.leaderBoard = leaderBoard;
    }
  },
  createAllElements: function() {},
  createScoreElement: function() {}
});
