AFRAME.registerComponent("givepoints", {
    remove: function () {
        let el = this.el;
        let radius = el.getAttribute("radius");
        let totalPerfectRadius = constants.PERFECT_RADIUS + constants.PERFECT_RADIUS_OFFSET;
        if (radius > totalPerfectRadius || radius < totalPerfectRadius) {
            gameState.score += 10;
        } else {
            gameState.score += 30;
        }
        console.log(gameState.score);
    }
})