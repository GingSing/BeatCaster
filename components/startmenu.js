AFRAME.registerComponent("menu", {
  schema: {},

  init: function() {
    // create initial menu entity
    let el = this.el;
    let menu = document.createElement("a-entity");
    // assign it attributes
    menu.setAttribute("geometry", {
      primative: "plane",
      height: "1",
      width: "2"
    });
    menu.setAttribute("material", {
      shader: "flat",
      color: "grey"
    });
    menu.setAttribute("position", {
      x: 0,
      y: 3,
      z: -4
    });
    // give it our other componenet that removes elements as an attribute so menu can call it
    menu.setAttribute("disappearonclick", "");
    //give our component play component
    menu.setAttribute("play", "");
    // adds the clickable class to our menu
    menu.classList.add("clickable");

    menu.addEventListener("mousedown", () => {
      el.sceneEl.setAttribute("generator", "");
      resumeGame();
    });

    // creates our text element
    let text = document.createElement("a-text");
    text.setAttribute("value", "Play");
    text.setAttribute("color", "white");
    text.setAttribute("align", "center");
    text.setAttribute("wrap-count", "10");
    text.setAttribute("position", {
      // move the text to be over the menu
      z: 0.5
    });
    // appends the menu to the scene and text to the menu
    menu.appendChild(text);
    this.el.sceneEl.appendChild(menu);
  },
  update: function() {},
  remove: function() {}
});
