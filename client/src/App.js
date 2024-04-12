import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/home/Home";
import Blog from "./Pages/Blog/Blog";
import Podcast from "./Pages/podcast/Podcast";
import PodcastArtist from "./Pages/podcast/podcastArtist/PodcastArtist";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import SignupForm from "./components/Login/SignupForm";
import PostPage from "./Pages/Blog/PostPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "./features/isLoggedIn";
import Profile from "./Pages/Profile/Profile";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import UploadPocast from "./Pages/Profile/UploadPocast";
import PodcastForm from "./Pages/Profile/podcastForm/PodcastForm";
import PodcastAudioForm from "./Pages/Profile/podcastForm/PodcastAudioForm";
import ProfileDefault from "./Pages/Profile/ProfileDefault";

function App() {
  // Redux state and dispatch setup for user authentication
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.isLoggedIn.loginVar);
  console.log("flag", flag);

  useEffect(() => {
    // Check for the presence of the token
    const token = localStorage.getItem("token");
    if (token) {
      // You can verify the token on the server to ensure its validity
      // If valid, set isAuthenticated to true
      // setIsAuthenticated(true);
      dispatch(checkLogin(true));
    }
    console.log("token", token);
  }, []);
  console.log("flag", flag);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/post/:id" element={<PostPage />} />
        <Route path="/podcast" element={<Podcast />}>
          <Route path="artist" element={<PodcastArtist />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="update" element={<UpdateProfile />} />
          <Route path="" element={<ProfileDefault />} />
          <Route path="uploadpodcast" element={<UploadPocast />}>
            <Route path="" element={<PodcastForm />} />
            <Route path="audio" element={<PodcastAudioForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
