import React from "react";
import "./about.css";
import image1 from "../../assets/about1.jpg";

const About = () => {
  return (
    <>
      <div className="flex1">
        <div className="about">
          <p>
            A Little<br></br>about me
          </p>
        </div>
        <div className="image">
          <img src={image1} />
        </div>
      </div>

      <div className="flex2">
        <div className="content">
          <p>
            I am a passionate front-end developer <br></br>skilled in HTML, CSS,
            JavaScript, and<br></br> React. I create responsive, user-friendly{" "}
            <br></br>web interfaces that deliver seamless<br></br> and engaging
            user experiences.<br></br>Continuously learning and adapting,
            <br></br> I strive to build clean, efficient code<br></br> that
            brings designs to life.
          </p>
        </div>
        <div className="icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
