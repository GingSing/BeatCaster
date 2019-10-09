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
      gameState.generatedObjects[gameState.currentShownNum];
    let lastGeneratedObject =
      gameState.generatedObjects[gameState.currentShownNum - 1];
    if (
      el.sceneEl.contains(currentGeneratedObject) &&
      el.sceneEl.contains(lastGeneratedObject)
    ) {
      let lineEntity = document.createElement("a-entity");
      lineEntity.setAttribute("line", {
        start: {
          x: lastGeneratedObject.object3D.position.x,
          y: lastGeneratedObject.object3D.position.y,
          z: lastGeneratedObject.object3D.position.z
        },
        end: {
          x: currentGeneratedObject.object3D.position.x,
          y: currentGeneratedObject.object3D.position.y,
          z: currentGeneratedObject.object3D.position.z
        },
        color: "red"
      });
    }
  }
});
