AFRAME.registerComponent("shrink", {
    tick: function (time, deltaTime) {
        let el = this.el;
        let radius = el.getAttribute("width") / 2;

        if (radius > 3) {
            this.decreaseRadius(deltaTime);
        } else {
            increaseBeatNum();
            el.sceneEl.removeChild(el);
        }
    },
    decreaseRadius: function (deltaTime) {
        let el = this.el;
        let radius = el.getAttribute("width") * 2;




        // el.setAttribute("width", (radius - (2 * radius * deltaTime) / 1000));
        // el.setAttribute("length", (radius - (2 * radius * deltaTime) / 1000))
    }
})