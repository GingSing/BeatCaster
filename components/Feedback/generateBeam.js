AFRAME.registerComponent("feedback", {
  schema: {
    intersected: {
      type: "boolean",
      default: false
    }
  },
  init: function() {},
  update: function() {
    let el = this.el;
    let data = this.data;

    el.addEventListener("raycaster-intersected", e => {
      this.raycaster = e.detail.el;
      data.intersected = true;
    });

    el.addEventListener("raycaster-intersected-cleared", () => {
      data.intersected = false;
    });

    el.addEventListener("mousedown", () => {
      if (data.intersected) {
        el.sceneEl.appendChild(
          this.drawBeam({
            start: {
              x: this.raycaster.object3D.position.x,
              y: this.raycaster.object3D.position.y,
              z: this.raycaster.object3D.position.z
            },
            end: {
              x: el.object3D.position.x,
              y: el.object3D.position.y,
              z: el.object3D.position.z
            }
          })
        );
      }
    });
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
      }
    });
    line.setAttribute("removebeam", "");

    return line;
  }
});
