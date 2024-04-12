import React from "react";
import ButtonTag from "./ButtonTag";
import Herosection from "../Pages/home/herosection/Herosection";

const BlogTemplate = ({ blogData }) => {
  return (
    <div className="">
      {blogData.map((data) => {
        return (
          <div>
            {data.id < 4 && (
              <div
                key={data.id}
                className="bg-[#071022] flex gap-8 mt-5 p-5 rounded-md">
                <div className="hover:">
                  <img
                    src="./images/episode.jpg"
                    className="rounded-md h-[90%]"
                    width={200}
                  
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-white">
                    <div className="text-sm w-fit">
                      <ButtonTag title={data.tag} bg="#040A1B" />
                    </div>
                    <h1 className="text-xl font-bold cursor-pointer hover:text-blue-400">
                      {data.title}
                    </h1>
                    <div className="flex justify-between">
                      <p className="text-gray-400">{data.author}</p>
                      <p className="text-blue-400 underline cursor-pointer">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTemplate;
