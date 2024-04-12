import React from "react";
import "../podcast.css";
import NavPodcast from "./NavPodcast";
import PodMainComponent from "./PodMainComponent";
import { Route, useLocation } from "react-router-dom";
import PodcastArtist from "../podcastArtist/PodcastArtist";

const PodcastHeroSection = () => {
  const location = useLocation();

  return (
    <div className="podcast-hero-container">
      <div className="podcast-box mx-auto">
        <NavPodcast />

        {location.pathname === "/podcast/artist" ? (
          <PodcastArtist />
        ) : (
          <PodMainComponent />
        )}
      </div>
    </div>
  );
};

export default PodcastHeroSection;
