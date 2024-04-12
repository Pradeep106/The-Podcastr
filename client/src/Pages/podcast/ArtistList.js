import React from "react";
import "./podcast.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArtistList = ({ artist }) => {
  return (
    <div className="flex gap-3 ">
      {artist.map((value) => {
        return (
          <Link to="/podcast/artist">
            <div
              key={value.id}
              className="artist-card cursor-pointer artist-box flex flex-col gap-2 items-center justify-center w-[200px] bg-gray-900 p-3 rounded-lg">
              <div className=" relative ">
                <img
                  src={value.image}
                  alt={value.name}
                  className="w-[100px]  h-[100px] rounded-full"
                />
                <div className="w-[100px]  h-[100px] absolute top-0 left-0 right-0 bottom-0 overlay-artist z-20  rounded-full"></div>
                <FaPlay className="text-3xl transition duration-1000 ease-in text-gray-300 absolute top-[40px] left-10 z-10 artist-play" />
              </div>
              <p className="artist-name text-gray-300 text-[14px]">
                {value.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ArtistList;
