import React from "react";
import Playlist from "./playlist/Playlist";
import "./podcast.css";
import PodcastHero from "../podcast/podcastHero/PodcastHeroSection";
import Player from "./player/Player";
import AudioPlayer from "./player/AudioPlayer";

const Podcast = () => {
  return (
    <div className="podcast-container">
      <div className="flex flex-col">
        <div className="flex">
          <Playlist />
          <PodcastHero />
        </div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Podcast;
