import React from "react";
import { Link } from "react-router-dom";

const ButtonTag = ({ title, link, bg }) => {
  return (
    <div
      className={`bg-[#192643] text-white px-8 py-2 rounded-full cursor-pointer hover:bg-[--main-color]`}>
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default ButtonTag;
