AFRAME.registerComponent("spawnreversecircle", {
  schema: {
    x: {
      type: "int",
      default: 0
    },
    y: {
      type: "int",
      default: 0
    },
    z: {
      type: "int",
      default: 0
    }
  },
  init: function() {
    let el = this.el;
  },
  tick: function() {
    let el = this.el;
    let data = this.data;
    if (
      data.x !== el.object3D.position ||
      data.y !== el.object3D.position.y ||
      data.z !== el.object3D.position.z
    ) {
      console.log("changed");
      data.x = el.object3D.position.x;
      data.y = el.object3D.position.y;
      data.z = el.object3D.position.z;
    }
  },
  remove: function() {
    let el = this.el;
    let data = this.data;

    el.sceneEl.appendChild(
      this.generateReverseRing({
        position: {
          x: data.x,
          y: data.y,
          z: data.z
        },
        color: "green",
        radius: 4,
        attributes: ["reverseshrink"]
      })
    );
  },
  generateReverseRing: function(info) {
    let { position, color, radius, attributes } = info;

    let ring = document.createElement("a-image");
    ring.setAttribute("src", "#ring");
    ring.setAttribute("material", {
      color
    });
    ring.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });
    ring.setAttribute("width", radius);
    ring.setAttribute("height", radius);

    for (let attribute of attributes) {
      ring.setAttribute(`${attribute}`, "");
    }

    return ring;
  }
});
