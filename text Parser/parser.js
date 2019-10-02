const fs = require("fs");

const beatMap = {
    notes: []
};

fs.readFile("Label Track.txt", {encoding: "UTF-8"}, (err, data)=> {
   data.split("beat").map(data => {
       beatMap.notes.push({time: parseFloat(data.split(" ")[0])* 1000});
   });
//    result.notes.map(data => {
//        console.log(JSON.stringify(data));
//    })
   fs.writeFileSync("beatMap.js", JSON.stringify(beatMap));
});