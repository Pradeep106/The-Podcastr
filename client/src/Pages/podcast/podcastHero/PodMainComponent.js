import React from "react";
import "../podcast.css";
import ArtistList from "../ArtistList";
import { artist } from "../data/Artist";


const PodMainComponent = () => {
  return (
    <div>
      <section>
        <div className="mt-10">
          <h1 className="text-3xl text-white font-bold">Flum : Skin</h1>
          <p className="mt-2 text-[16px] w-[50%] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi,
            labore magni sapiente atque architecto!
          </p>
          <div className="flex gap-4 mt-5">
            <button className="text-white text-[16px] bg-[#00B6D5] px-6 py-1 rounded-full">
              PLAY
            </button>
            <button className="text-white text-[16px] bg-[#00B6D5] px-4 py-1 rounded-full">
              FOLLOW
            </button>
          </div>
          <h3 className="text-lg mt-[2rem] font-bold text-white">
            POPULAR PODCASTERS
          </h3>
          <div className="w-[100%] mt-5 flex podcast-artist no-scrollbar">
            <ArtistList artist={artist} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodMainComponent;
