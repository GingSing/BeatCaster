const fs = require("fs");

const beatMap = {
  notes: []
};
/* takes a .txt file that is exported using Audacity and makes it into a Json Object with times
note you will need to still add X, Y positions manually (for each note) otherwise they will generate at random locations.
this is just to get you started.
*/
fs.readFile("Light.txt", { encoding: "UTF-8" }, (err, data) => {
  data.split("beat").map(data => {
    beatMap.notes.push({ time: parseFloat(data.split(" ")[0]) * 1000 });
  });

  fs.writeFileSync("beatMap.js", JSON.stringify(beatMap));
});
