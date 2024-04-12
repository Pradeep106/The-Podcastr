import React from "react";

const imageComp = ({ src, title, author }) => {
  return (
    <div className="w-[100%] h-[100%] main-box">
      <div className="w-[90%] h-[70%] overflow-hidden  rounded-2xl">
        <img
          src={src}
          alt=""
          className="w-[100%] h-[100%] bg-cover bg-center main-img"
        />
      </div>
      <h1 className="text-white font-medium text-lg mt-2">{title}</h1>
      <p className="text-gray-400 text-sm font-semibold ">{author}</p>
    </div>
  );
};

export default imageComp;
