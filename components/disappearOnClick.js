AFRAME.registerComponent("disappearonclick", {
    init: function () {
        let el = this.el;
        this.disappear = () => {
            if (gameState.currentBeatNum == el.getAttribute("num")) {
                increaseBeatNum();
                el.sceneEl.removeChild(el);
            }
        }
    },
    update: function () {
        let el = this.el;
        el.addEventListener("click", this.disappear);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.disappear);
    }
})