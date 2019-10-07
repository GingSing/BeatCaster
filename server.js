require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

const Song = require("./models/Song");
const Score = require("./models/Score");
const BeatMap = require("./models/BeatMap");

app.use("/scripts", express.static("scripts"));
app.use(express.static("public"));

const db = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(`${db}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

app.get("/beatMap", (req, res) => {});

app.post("/addSong", (req, res) => {
  let { name, artist, image, url } = req.body;
  const song = new Song({
    name,
    artist,
    image,
    url
  });
  if (song.save()) {
    res.send("success");
  }
});

app.post("/addBeatMap", (req, res) => {
  let { notes, song } = req.body;
  const beatMap = new BeatMap({
    song,
    notes
  });

  if (beatMap.save()) {
    res.send("success");
  }
});

app.post("/editSong", (req, res) => {
  let { url } = req.body;
  Song.findOne().then(song => {
    song.url = url;
    if (song.save()) {
      res.send("success");
    }
  });
});

app.get("/songs", (req, res) => {
  Song.find()
    .populate("beatMap")
    .then(songs => res.json(songs));
});

app.post("/score", (req, res) => {
  let { hits, name, user_id, totalScore, song_id } = req.body;
  let newScore = new Score({
    hits,
    name,
    user_id,
    totalScore,
    song_id: song_id
  });
  if (newScore.save()) {
    res.json({ success: true });
  }
});

io.on("connection", socket => {
  socket.on("selectSong", async userSelection => {
    await Score.find(
      { song_id: userSelection.song_id },
      ["user_id", "name", "totalScore"],
      {
        limit: 5,
        sort: { totalScore: -1 }
      }
    )
      .then(data => {
        io.emit(
          "selectSong",
          JSON.stringify({ scores: data, user_id: userSelection.user_id })
        );
      })
      .catch(err => console.log(err));
  });
  socket.on("update", user => {
    io.emit("update", {
      user_id: user.user_id,
      name: user.name,
      totalScore: user.score
    });
  });
});

http.listen(PORT, () => {
  console.log(`Connected on PORT ${PORT}`);
});
