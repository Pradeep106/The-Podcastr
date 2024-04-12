import React, { useState } from "react";
import PodcastForm from "./podcastForm/PodcastForm";
import { Outlet } from "react-router-dom";
import PodcastAudioForm from "./podcastForm/PodcastAudioForm";

const UploadPocast = () => {
//   const location = useLocation();

  return (
    <div className="w-[75%] text-white h-[100%] background-greadient">
      <div className="w-[50%] h-[100%] mx-auto mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default UploadPocast;
