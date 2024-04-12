import React from "react";
import "./podcastArtist.css";
import AllPlaylist from "./AllPlaylist";
import { FaPlay } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { artist } from "../data/Artist";

const PodcastArtist = () => {
  return (
    <div className="podartist-container no-scrollbar mx-auto mt-10">
      <div className=" rounded-lg background flex flex-col bg-blue-200">
        <div className="p-5 background">
          <div className=" flex  gap-5 text-white">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-[30%] rounded-lg "
            />
            <div className="flex gap-2 flex-col item-center justify-end">
              <p className="text-white text-[16px] border w-fit px-3  rounded-full">
                Follow
              </p>
              <h1 className="text-5xl font-bold">This is the title</h1>
              <p className="text-2xl">this is description</p>
            </div>
          </div>

          <div>
            <div className="bg-gray-900 p-3 rounded-lg mt-5 text-white text-[16px]">
              <h2 className="text-lg font-bold">About</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quibusdam eveniet eius totam natus delectus aut nesciunt
                exercitationem nostrum praesentium?
              </p>
              <div className="flex justify-between">
                <div>category</div>
                <div className="flex gap-5">
                  <div className="rounded-full text-black text-[14px] bg-white p-2 border">
                    <FaPlay />
                  </div>
                  <AiOutlinePlusCircle className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 background2">
          <div className="text-xl text-white font-bold mt-5">All Episodes</div>
          <div className="mt-5">
            <AllPlaylist artist={artist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastArtist;
