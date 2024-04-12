import React from "react";
import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { FaPlay, FaPause } from "react-icons/fa";
import { ImImages, ImLoop } from "react-icons/im";
import { FiShuffle } from "react-icons/fi";
import Toggle from "../../../components/Toggle";
import AudioPlayer from "./AudioPlayer";

const Player = () => {
  return (
    <div className="player-container">
      <div className="w-[95%] text-white pb-2 flex justify-between items-center h-[100%] mx-auto">
       
        <div className="w-[45%] justify-center items-center gap-2 flex">
          <div className="flex justify-center items-center gap-3 text-lg mr-5">
            <AiOutlineStepBackward />
            <Toggle on={<FaPlay />} off={<FaPause />} />
            <AiFillStepForward />
          </div>
          <p>02:24</p>
          <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-[90%]"></div>
          </div>
          {/* <AudioPlayer/> */}
          <p>02:40</p>
        </div>
        <div className="text-lg flex gap-2">
          <Toggle on={<HiSpeakerXMark />} off={<HiSpeakerWave />} />
          <Toggle on={<FiShuffle />} off={<ImLoop />} />
        </div>
      </div>
    </div>
  );
};

export default Player;
