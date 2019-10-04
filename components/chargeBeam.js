AFRAME.registerComponent("chargebeam", {
  update: function() {
    let el = this.el;
    let data = this.data;

    el.addEventListener("mousedown", () => {
      let right = document.getElementById("rightHand");
      let rightP = el.getAttribute("position");
      let left = document.getElementById("leftHand");
      let leftP = left.getAttribute("position");
      console.log(leftP);
      console.log(right);
      let xDistance = Math.abs(rightP.x) - Math.abs(leftP.x);
      let yDistance = Math.abs(rightP.y) - Math.abs(leftP.y);
      let zDistance = Math.abs(rightP.z) - Math.abs(leftP.z);
      console.log(xDistance);
      console.log(yDistance);
      console.log(zDistance);

      let distance = Math.sqrt(
        Math.pow(xDistance, 2) + Math.pow(yDistance, 2) + Math.pow(zDistance, 2)
      );
      console.log(distance);
    });
  }
});
