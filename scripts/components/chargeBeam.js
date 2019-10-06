AFRAME.registerComponent("chargebeam", {
  dependencies: ["raycaster"],
  schema: {
    isMouseDown: {
      type: "boolean",
      default: false
    },
    charging: {
      type: "boolean",
      default: false
    },
    timerCheck: {
      type: "int",
      default: 0
    }
  },
  init: function() {
    let data = this.data;
    let el = this.el;
    this.timer = () => {
      //if mousedown ismousedown will be set to true
      data.isMouseDown = true;
    };
    //on mouse up if charging is true then release will show distance
    this.release = () => {
      if (data.charging) {
        let left = document.getElementById("leftHand");
        let rightP = el.getAttribute("position");
        let leftP = left.getAttribute("position");
        console.log((window.ray = left.getAttribute("raycaster")));
        let xDistance = Math.abs(rightP.x - leftP.x);
        let yDistance = Math.abs(rightP.y - leftP.y);
        let zDistance = Math.abs(rightP.z - leftP.z);

        let distance = Math.sqrt(
          Math.pow(xDistance, 2) +
            Math.pow(yDistance, 2) +
            Math.pow(zDistance, 2)
        );
        // console.log(distance);
        console.log(left);

        el.sceneEl.appendChild(
          this.drawBeam({
            start: {
              x: leftP.x,
              y: leftP.y,
              z: leftP.z
            },
            end: {
              x: 0,
              y: 5,
              z: -30
            }
          })
        );
      }
      data.charging = false;
      data.isMouseDown = false;
      data.timerCheck = 0;
    };
  },
  update: function() {
    let el = this.el;
    let data = this.data;

    el.addEventListener("mousedown", this.timer);

    el.addEventListener("mouseup", this.release);
    el.addEventListener("raycaster-intersection", e => {});
  },
  tick: function(time, deltaTime) {
    let data = this.data;
    // when mouse is down start adding time until timercheck is greater than 2000
    if (data.isMouseDown) {
      data.timerCheck += deltaTime;
      if (data.timerCheck > 1000) {
        data.charging = true;
      }
    }
  },
  drawBeam: function(target) {
    let el = this.el;
    let data = this.data;

    let line = document.createElement("a-entity");
    line.setAttribute("line", {
      start: {
        x: target.start.x,
        y: target.start.y,
        z: target.start.z
      },
      end: {
        x: target.end.x,
        y: target.end.y,
        z: target.end.z
      },
      color: "red"
    });
    return line;
  }
});
