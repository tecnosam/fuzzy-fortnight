//
import React from "react";
import "./Hero.css";
import { images } from "../../assets/images";
import { Link } from 'react-router-dom';

const Hero = () => {
  const { BigLogo } = images();
  return (
    <div className="containert">
      <div className="heroLeft">
        <img src={BigLogo} alt="BUCC logo" />
      </div>
      <div className="heroRight">
        <h1>
          Welcome to <br /> BUCC Electoral <br /> System
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At volutpat
          morbi eros donec vel eu. Facilisi eu, in non enim vestibulum tristique
          convallis lectus hendrerit. Duis ac bibendum fringilla sit ullamcorper
          feugiat eget lectus. Egestas urna donec arcu pellentesque id nulla
          quam dictumst.
        </h2>
        <div className="heroRight-btn">
          <Link to="/login">
            <button className="btn-blue">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn-gold">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
