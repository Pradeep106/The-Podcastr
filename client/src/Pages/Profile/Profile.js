import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import UpdateProfile from "./UpdateProfile";
import { Outlet, useLocation } from "react-router-dom";
import UploadPocast from "./UploadPocast";

const Profile = () => {
  const location = useLocation();
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden flex">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
};

export default Profile;
