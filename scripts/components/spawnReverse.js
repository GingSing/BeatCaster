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
      data.x = el.object3D.position.x;
      data.y = el.object3D.position.y;
      data.z = el.object3D.position.z;
    }
  },
  remove: function() {
    let el = this.el;
    let data = this.data;
    // only generates if you click our beatobj before the smallest radius
    if (el.getAttribute("width") > constants.SMALLEST_RADIUS) {
      el.sceneEl.appendChild(
        this.generateReverseRing({
          position: {
            x: data.x,
            y: data.y,
            z: data.z
          },
          color: "green",
          shader: "flat",
          opacity: 1.0,
          animation: {
            property: "scale",
            easing: "easeInCubic",
            dur: 150,
            from: {
              x: 0.5,
              y: 0.5,
              z: 0.5
            },
            to: {
              x: 2,
              y: 2,
              z: 2
            },
            loop: 1
          },
          rotation: {
            x: data.y > 20 ? 30 : 0,
            y: data.x > 20 ? -30 : data.x < -20 ? 30 : 0,
            z: 0
          },
          attributes: ["removeselftimer"],
          animation__2: {
            property2: "material.opacity",
            easing2: "easeInCubic",
            dur2: 150,
            from2: 1.0,
            to2: 0
          }
        })
      );
    }
  },
  generateReverseRing: function(info) {
    let {
      position,
      color,
      shader,
      animation,
      attributes,
      animation__2,
      opacity,
      rotation
    } = info;
    // need to defined the propertys of the animation info that was passed
    let { property2, easing2, dur2, from2, to2 } = animation__2;
    let { property, easing, dur, from, to, loop } = animation;

    // creates and sets all the attributes of the ring that explodes
    let aRing = document.createElement("a-ring");
    aRing.setAttribute("position", {
      x: position.x,
      y: position.y,
      z: position.z
    });
    aRing.setAttribute("radius-inner", 3);
    aRing.setAttribute("radius-outer", 3.2);
    aRing.setAttribute("material", {
      shader,
      color,
      opacity
    });
    aRing.setAttribute("animation", {
      property,
      easing,
      dur,
      from,
      to,
      loop
    });
    aRing.setAttribute("rotation", {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z
    });
    aRing.setAttribute("animation__2", {
      property: property2,
      easing: easing2,
      dur: dur2,
      from: from2,
      to: to2
    });
    // uses a loop just incase you want more attributes(components attached)
    for (let attribute of attributes) {
      aRing.setAttribute(`${attribute}`, "");
    }

    return aRing;
  }
});
