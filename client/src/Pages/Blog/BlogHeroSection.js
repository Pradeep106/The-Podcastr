import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import ImageComp from "./components/ImageComp";
import { blogData } from "./BlogData";
import Footer from "../home/Footer/Footer";

const BlogHeroSection = () => {
  const firstTwoBlogPosts = blogData.slice(0, 2);

  return (
    <div className=" background-gredient3  mx-auto pl-10 mt-10">
      <div className="w-[95%] mx-auto">
        <main className="flex gap-14 main-container ">
          <div className="w-[70%] h-[100%] flex gap-3 flex-col main-post main-box">
            <div className="w-[100%]  h-[90%] relative overflow-hidden rounded-2xl">
              <img
                loading="eager"
                src="https://assets.website-files.com/638994e3ac476c94ba486f9c/638998000e53efbaefe87dd2_blog-01.jpg"
                className="w-[100%] h-[100%] z-0 main-img transition ease-in-out delay-150 duration-300 "
                alt=""
              />
              <div className="absolute w-[100%] h-[50%] bottom-0 z-10 background-gredient">
                <button className="bg-gray-400 rounded-full absolute bottom-10 left-10 px-3 py-1">
                  Category
                </button>
              </div>
            </div>
            <h1 className="text-white text-3xl font-semibold">
              <Link to="/blog/post/1">
                The Social media detox that can lead next genration
              </Link>
            </h1>
          </div>
          <div className="h-[100%] w-[30%] img-comp1">
            <div className="w-[100%]">
              {firstTwoBlogPosts.map((post) => {
                return (
                  <div className="mb-5">
                    <ImageComp
                      key={post.id}
                      src={post.src}
                      title={post.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        <section className="mt-14">
          <h1 className="text-white text-xl font-bold">Previous Post</h1>
          <div className="flex justify-center flex-wrap mt-10 ">
            {blogData.map((post) => {
              return (
                <div className="image-comp2 w-[25%]">
                  <ImageComp
                    key={post.id}
                    src={post.src}
                    title={post.title}
                    author={post.author}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHeroSection;
