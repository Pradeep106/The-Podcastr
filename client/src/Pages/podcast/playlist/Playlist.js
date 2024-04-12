import React from "react";
import "../podcast.css";
import { artist } from "../data/Artist";
import ArtistList from "../ArtistList";
import CustomPlaylist from "./CustomPlaylist";
import { AiFillHome } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { Link } from "react-router-dom";

const Playlist = () => {
  return (
    <div className="bg-[--dark-black] playlist-container">
      <div className="text-gray-400 text-[16px] flex flex-col">
        <div className="flex flex-col gap-3 pl-2">
          <div className="flex items-center cursor-pointer gap-3">
            <AiFillHome />
            <Link to='/'>HOME</Link>
          </div>
          <div className="flex items-center cursor-pointer gap-3">
            <IoNewspaper />
            <span>BLOG</span>
          </div>
          <h3 className="text-white text-lg font-semibold">Playlist</h3>

        </div>
        <div className="flex flex-col text-gray-400 text-[16px]">
          <CustomPlaylist artist={artist} />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
