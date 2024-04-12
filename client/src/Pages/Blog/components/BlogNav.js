import React from "react";
import { Link, NavLink } from "react-router-dom";

const BlogNav = () => {
  return (
    <div className="flex justify-between  items-center w-[90%]">
      <div className="logo  ">
        <span className="text-[#00a8ff] text-4xl font-black ">The</span>
        <span className="text-4xl font-black">PodCstr</span>
        <span className="text-[#00a8ff] text-4xl font-black">.</span>
      </div>
      <ul className="flex blogNav text-white">
        <li className="hover:underline">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/podcast">Podcast</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <div>
        <Link to="/login" className="bg-white px-5 py-2 rounded-full ">Login</Link>
      </div>
    </div>
  );
};

export default BlogNav;
