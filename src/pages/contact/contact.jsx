import React from "react";
import image from "../../assets/WhatsApp Image 2025-07-11 at 20.09.01_d2779f17.jpg";
import "./contact.css";

// React Icons
import {
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-flex">
      <div className="contact-content">
        <div className="title-block">
          <h1 className="title">
            WORK <br></br>WITH ME
          </h1>
        </div>

        <div className="email">
          <strong>Email:</strong>
          <p>mhassanakram1020@gmail.com</p>
          <p>mhassanakram1020@hotmail.com</p>
        </div>

        <div className="phone">
          <strong>Contact no:</strong>
          <p>+92 309 788 1609</p>
        </div>

        <div className="social-icons">
          <a
            href="https://wa.me/923097881609"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-hassan-akram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/HassanA35976491?t=lCoCOOLFHrtM9ulatUvV3w&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/hmhassan2024?igsh=MW1vb3lyaHJic2c0dw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1ArdeXSWiH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="image-wrapper">
        <img src={image} alt="Hassan Akram" className="profile-image" />
      </div>
    </div>
  );
};

export default Contact;
