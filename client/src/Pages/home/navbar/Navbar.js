import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import ButtonTag from "../../../components/ButtonTag";
import { useSelector } from "react-redux";

const Navbar = ({}) => {
  const [menu, setMenu] = useState(true);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.loginVar);
console.log("login nav",isLoggedIn)
  return (
    <nav className="nav">
      <div className="logo  ">
        <span className="text-blue-300 text-4xl font-black ">The</span><span className="text-4xl font-black">PodCstr</span> 
        <span className="text-blue-300text-4xl font-black">.</span>
      </div>
      <div className="">
        <ul className="link-container">
          <li className="text-li">
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li className="text-li">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-li">
            <Link to="/podcast">Podcast</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <ButtonTag title="Start Listening" link="/podcast" bg="#071022" />
        <div className="menu px-2" onClick={() => setMenu(!menu)}>
          {menu ? (
            <TiThMenu className="text-lg" color="white" />
          ) : (
            <IoClose
              color="white"
              className="text-xl transition-all duration-200 delay-100 ease-linear"
            />
          )}
        </div>
        <Link to="/profile" className="cursor-pointer">
        {isLoggedIn && <div className="w-10 h-10 rounded-full">
        <FaUserCircle className="text-gray-400 w-[100%] h-[100%]"/>
        </div>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
