import React from "react";
import "../podcast.css";
import { BiSearch } from "react-icons/bi";

const NavPodcast = () => {
  return (
    <div>
      <nav className="flex justify-between items-center gap-5 podcast-nav mt-3">
        <div className="flex text-[16px] w-[100%] text-white gap-5">
          <p className="cursor-pointer px-4 py-2 hover:font-semibold w-[20%]">
            DISCOVER
          </p>
          <p className="cursor-pointer px-4 py-2 hover:font-semibold w-[20%]">
            FAVORITE
          </p>
        </div>
        <form className="bg-[#1E1958] w-[100%] justify-between rounded-full px-4 flex ">
          <input
            className="bg-[#1E1958] w-[90%] px-3 py-2 outline-none text-gray-400 text-[14px]"
            type="text"
            placeholder="Search "
          />
          <button>
            <BiSearch className="text-lg w-fit text-gray-400" />
          </button>
        </form>
        <div>
          <img
            src="./images/profile.jpg"
            className="w-[50px] h-[50px] rounded-full "
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default NavPodcast;
