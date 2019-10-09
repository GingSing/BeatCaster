AFRAME.registerComponent("drawlinesbetween", {
  schema: {},
  init: function() {
    let data = this.data;
  },
  update: function() {},
  tick: function() {
    let data = this.data;
    let el = this.el;
    let currentGeneratedObject =
      gameState.generatedObjects[gameState.currentShownNum - 1];
    let lastGeneratedObject =
      gameState.generatedObjects[gameState.currentShownNum - 2];
    if (
      el.sceneEl.contains(currentGeneratedObject) &&
      el.sceneEl.contains(lastGeneratedObject) &&
      currentGeneratedObject.object3D.position.z < 0
    ) {
      let lineEntity = document.createElement("a-entity");
      lineEntity.setAttribute("line", {
        start: {
          x: lastGeneratedObject.object3D.position.x,
          y: lastGeneratedObject.object3D.position.y,
          z: -30
        },
        end: {
          x: currentGeneratedObject.object3D.position.x,
          y: currentGeneratedObject.object3D.position.y,
          z: -30
        },
        color: "red"
      });
      el.sceneEl.appendChild(lineEntity);
    }
  }
});
