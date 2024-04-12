import React from "react";
import Navbar from "../home/navbar/Navbar";
import BlogHeroSection from "./BlogHeroSection";
import BlogNav from "./components/BlogNav";
import Footer from "../home/Footer/Footer";

const Blog = () => {
  return (
    <div className=" flex flex-col bg-[#191A1C] items-center overflow-hidden">
      
        <div className="py-10 w-[100%] flex justify-center">
        <BlogNav/>
        </div>
     
      <BlogHeroSection />
      <div className="bg-black w-[100vw] overflow-hidden">
      <Footer/>
      </div>
    </div>
  );
};

export default Blog;
