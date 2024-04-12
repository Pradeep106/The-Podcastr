import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      {/* <img src={bg} alt="" /> */}
      <div className="flex justify-between m-auto w-[1168px] max-w-[1168px] px-5 py-8">
        <h1 className="text-white font-extrabold text-3xl font-regular">
          Thepods<span className="text-[#1DB954]">.</span>
        </h1>
        <ul className="text-white font-medium text-lg flex gap-8 items-center">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Podcast</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
        <button className="text-black font-regular bg-white px-5 py-2 rounded-3xl">
          Start Listening
        </button>
      </div>
    </div>
  );
};

export default Header;
