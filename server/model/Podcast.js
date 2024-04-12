const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    artistName:{
      type:String,
      required:true,
      default:"Artist"
    },
    playlist:{
      type:array
    }
  audio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PodcastAudio",
  },
});

module.exports = mongoose.model("Podcast", podcastSchema);
