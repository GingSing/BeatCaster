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
    if (el.getAttribute("width") > constants.SMALLEST_RADIUS) {
      el.sceneEl.appendChild(
        this.generateReverseRing2({
          position: {
            x: data.x,
            y: data.y,
            z: data.z
          },
          color: "green",
          shader: "flat",
          animation: {
            property: "scale",
            easing: "easeInCubic",
            dur: 150,
            from: {
              x: 0.1,
              y: 0.1,
              z: 0.1
            },
            to: {
              x: 3.5,
              y: 3.5,
              z: 3.5
            },
            loop: 1
          },
          attributes: ["removeselftimer"]
        })
      );
      console.log(el.sceneEl);
    }
  },
  generateReverseRing2: function(info) {
    let { position, color, shader, animation, attributes } = info;

    console.log(info);

    let { property, easing, dur, from, to, loop } = animation;

    let aRing = document.createElement("a-ring");
    aRing.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });
    aRing.setAttribute("radius-inner", 3);
    aRing.setAttribute("radius-outer", 3.1);
    aRing.setAttribute("material", {
      shader,
      color
    });
    aRing.setAttribute("animation", {
      property,
      easing,
      dur,
      from,
      to,
      loop
    });

    for (let attribute of attributes) {
      aRing.setAttribute(`${attribute}`, "");
    }

    return aRing;
  }
});
