AFRAME.registerComponent("setclickable", {
    schema: {
        currentNum: {
            type: "int",
            default: 0
        }
    },
    init: function () {
        let data = this.data;

        //in case game doesn't start at 0
        data.currentNum = gameState.currentBeatNum;
        this.setNextClickable(gameState);
    },
    tick: function () {
        let data = this.data;
        if (gameState.currentBeatNum !== data.currentNum) {
            this.setNextClickable(gameState);
        }
    },
    setNextClickable: function (gameState) {
        if (gameState.generatedObjects[gameState.currentBeatNum]) {
            gameState.generatedObjects[gameState.currentBeatNum].classList.add(
                "clickable"
            );
        }
    }
})