import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="h-[100%] w-[25%] bg-[--main-balck]">
      <ul className="activeLink text-gray-400">
        <li>
          <NavLink
            to="/profile/update"
            >Edit Your Profile</NavLink>
        </li>
        <li>
          <NavLink to="/profile/uploadpodcast">Become a Podcaster</NavLink>
        </li>
        <li>
          <NavLink to="/post">Write a blog</NavLink>
        </li>
      </ul>

      <div className="text-gray-400">
        <ul>
          <li onClick={handleLogout}>
            <Link>Log Out</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
