AFRAME.registerComponent("endgame", {
  schema: {
    ended: {
      type: "boolean",
      default: false
    }
  },
  tick: function(time, deltaTime) {
    let el = this.el;
    let data = this.data;

    if (
      gameState.currentShownNum === gameState.generatedObjects.length &&
      gameState.isPlaying
    ) {
      if (!data.ended) {
        data.ended = true;
        setTimeout(async () => {
          pauseGame();
          let reqBody = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({
              hits: gameState.hits,
              totalScore: gameState.score,
              name: gameState.name,
              user_id: gameState.user_id,
              song_id: gameState.song_id
            })
          };
          await fetch("/score", reqBody)
            .then(res => res.json())
            .then(data => {
              el.setAttribute("visible", true);
              el.children[1].setAttribute("value", `${gameState.score}`);
              resetGameState();
            });
        }, 5000);
      }
    }
  }
});
