import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonTag from "../../../components/ButtonTag";
import "../herosection/herosection.css"
const Footer = () => {
  return (
    <div className="mt-10">
      <div className="w-[90vw] flex mx-auto flex-col gap-5">
        <h1 className="text-3xl text-center text-white font-bold">
          <span className="text-blue-500 animate__animated animate__fadeOutLeft">the</span>Podcstr
          <span className="text-blue-500">.</span>
        </h1>
        <p className="text-white text-center">
          thePods. is a personal podcast theme, made for anyone looking to start
          a podcast website.
        </p>
        <div className="text-white  text-4xl flex gap-5 justify-center">
          <PiGithubLogoFill className="rounded-full cursor-pointer p-2 bg-white text-black" />
          <FaLinkedinIn className=" rounded-full cursor-pointer p-2 bg-blue-500 " />
          <BsYoutube className=" rounded-full cursor-pointer p-2 bg-red-600" />
          <FaXTwitter className=" rounded-full cursor-pointer p-2 bg-black" />
        </div>
        <h1 className="text-white font-bold text-center  text-3xl">
          Make <span className="text-blue-500">Great Podcast</span>
          <br /> And Stay Tuned
        </h1>
        <div className="flex justify-between mt-10 footer-container">
          <div>
            <p className="text-gray-400 footer-desc">
              Podcasts can become advice, an idea. When you don't <br /> have
              time to read, turn on the podcast, listen and enjoy.
            </p>
            <div className="text-blue-500 flex gap-5 footer-links">
              <Link to="/" className="cursor-pointer hover:underline">
                Home
              </Link>
              <Link to="/blog" className="cursor-pointer hover:underline">
                Blog
              </Link>
              <Link to="podcast" className="cursor-pointer hover:underline">
                Podcast
              </Link>
              <Link to="/" className="cursor-pointer hover:underline">
                About
              </Link>
            </div>
          </div>
          <div className="mr-20">
            <h2 className="text-white text-lg font-bold mr-20">NewsLetter</h2>
            <input
              type="email"
              placeholder="enter email"
              className="border-b-2 bg-inherit outline-none text-gray-400  p-2"
            />
           <button type="submit" className="text-white px-3 py-2 bg-blue-500 rounded-full ml-5 hover:bg-[--main-color] transition-colors duration-200 ease-linear">Subscribe</button>
          </div>
        </div>
        <p className="text-gray-400 my-5 text-center ">©thePodcastr. All Rights Reserved 2023.<br/>Made by Pradeep</p>
      
      </div>
    </div>
  );
};

export default Footer;
