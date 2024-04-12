import React from "react";
import "./herosection.css";
import Login from "../../../components/Login/Login";
import ButtonTag from "../../../components/ButtonTag";
import { artist } from "../../podcast/data/Artist";
import CustomPlaylist from "../../podcast/playlist/CustomPlaylist";
import BlogTemplate from "../../../components/BlogTemplate";
import { blogData } from "../../podcast/data/blogData";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div className="hero-container">
      <div className="flex hero-box mx-auto mt-14 bg-[#071022] rounded-lg hero-box">
        <div className="music-section rounded-lg">
          <img src="./images/hero-img.jpg" className="h-[100%]" alt="" />
        </div>
        <div className="body flex items-center flex-col justify-center">
          <div className="body-heading p-5">
            <h1 className="text-white font-bold text-3xl tracking-wider text-center ">
              Discover podcasts
            </h1>
            <p className="text-white text-center mt-3 desc">
              Discover podcasts that entertain, inform, and inspire podcast:
              expert interviews, diverse topics, inspiring stories, all in one
              place. Subscribe today!
            </p>
          </div>
          <div className="signup-section flex gap-2 justify-center text-white mt-10 pb-5 w-[90%]">
            <button className=" px-5 py-2 bg-[#192643] rounded-full">
              <Link to="/signup">Signup</Link>{" "}
            </button>
            <button className="border px-5 py-2 border-[#192643] rounded-full">
             <Link to="/login">Login</Link> 
            </button>
          </div>
        </div>
      </div>

      <section className="bg-[#040A1B]">
        <div className="hero-box mx-auto flex-col mt-14 bg-[#040A1B]">
          <h1 className="text-white text-3xl font-bold text-center">
            Popular Podcasts
          </h1>
          <p className="text-white text-center mt-5 mb-10">
            With the portability, many listeners find the length of a podcast
            the perfect complement to their already hectic schedules.
          </p>
          <div className="flex gap-10 box-container h-[50vh] rounded-lg bg-[#071022] ">
            <div className=" w-[40%] playlist-holder">
              <div className="text-white text-lg font-bold px-5 pt-5">
                Playlist
              </div>
              <div className="overflow-y-scroll no-scrollbar text-gray-400 px-5 h-[80%] playlist-box">
                <CustomPlaylist artist={artist} />
              </div>
            </div>
            <div className="w-[60%] h-[100%] image-container relative ">
              <div className="overlay"></div>
              <img
                src="./images/hero-section.jpg"
                className="h-[100%] w-[100%] podcast-image"
                alt=""
              />
              <div className="absolute top-[40%] left-[38%] tag">
                <ButtonTag title="INTERVIEW" bg="#071022" />
              </div>
              <h1 className="text-white absolute bottom-[40%] left-[30%] font-bold text-2xl left-5 bottom-2 title">
                How to create letter
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90vw] bg-[#040A1B] flex flex-col mx-auto">
        <div className="mt-10 mb-10">
          <h1 className="text-3xl text-white font-bold text-center mb-5">
            Most Popular News & Top Stories
          </h1>
          <div className="text-white text-center">category</div>
          <div className="w-[100%] mt-5 flex justify-center items-center blog-template gap-5">
            <BlogTemplate blogData={blogData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
