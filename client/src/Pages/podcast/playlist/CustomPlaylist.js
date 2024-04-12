import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { playSong, pauseSong } from "../../../features/audioPlaySlice";

import { track, trackFalg } from "../../../features/dataSlice";
import { FaPlay } from "react-icons/fa";
import "../podcast.css";

const CustomPlaylist = ({ artist, width }) => {
  // const currentSong = useSelector((state) => state.audioPlay.currentSong);
  // const isPlaying = useSelector((state) => state.audioPlay.isPlaying);

  const index = useSelector((state) => state.data.index);
  const flag = useSelector((state) => state.data.flag);
  const [idIndex, setIdIndex] = useState(0);

  const dispatch = useDispatch();

  const playPauseHandler = useEffect(() => {
    dispatch(track(index));
  }, []);

  console.log("track", index);

  // const playPauseHandler =  useEffect({

  return (
    <div className="mt-5 lg:h-[60vh] overflow-y-scroll no-scrollbar">
      {artist.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-4 items-center mt-2 py-2 justify-start custom-container hover:bg-[#1E1958] hover: px-3 hover:rounded-md cursor-pointer"
            onClick={() => {
              dispatch(track(item.id));
              dispatch(trackFalg(true));
            }}>
            <p className="font-semibold">{item.id}</p>
            <div className="h-10 w-10 relative">
              <img src={item.image} className="h-10 w-10 rounded-lg" alt="" />
              <div className="absolute w-[100%] h-[100%] bg-white top-0 rounded-lg flex cursor-pointer overlay-custom items-center justify-center ">
                <FaPlay className="text-lg transition duration-1000 ease-in absolute top-3 left-3 text-gray-500  z-10 artist-play" />
              </div>
            </div>
            <div className="">
              <h4 className="text-white font-bold ">
                {`${width}` < "30vh"
                  ? item.title
                  : item.title.substring(0, 16) + "..."}
              </h4>
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomPlaylist;
