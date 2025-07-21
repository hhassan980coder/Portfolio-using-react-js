import React from "react";
import profile from "../../assets/myimage (2).png";
import "./home.css";

const Home = () => {
  return (
    <div id="home">
      <h1 className="name">Hafiz Muhammad Hassan Akram</h1>
      <div className="image-wrapper">
        <img src={profile} alt="profile" className="profile-img" />
      </div>
      <h1 className="portfolio">PORTFOLIO</h1>
      <p className="title-1">Front-End Developer</p>
    </div>
  );
};

export default Home;
