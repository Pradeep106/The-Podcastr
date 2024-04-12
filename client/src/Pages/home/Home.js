import React, { useState } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Herosection from "./herosection/Herosection";
import Footer from "./Footer/Footer";

const Home = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="home-container">
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
};

export default Home;
