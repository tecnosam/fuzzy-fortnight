import React from "react";
import './Footer.css'

import Socials from "../../assets/brand/imports";

const { Twitter, Facebook, Instagram, Youtube } = Socials;

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: "1px solid #303A44"}}>
      <div style={{display: "flex", justifyContent: "space-between", width: "1149px", margin: "0 auto"}}>
      <div className="footer-left">
        <p>Copyright © BUCC 2022. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={Youtube} alt="YouTube" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
