import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../style/hero.css";
import heroImg from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="subtitle-box">
              <span className="subtitle-line"></span>
              <p className="subtitle">Trending product in 2024</p>
            </div>
            <h2 className="hero__title">
              Make Your Interior More Minimalistic & Modern
            </h2>
            <p className="hero__text">
              Refresh your home by getting rid of unnecessary details and extra
              items. Choose furniture with simple forms that accentuate
              functionality and elegance. Monochromatic tones and neutral colors
              will create a tranquil atmosphere, while accents made of natural
              materials will add a touch of warmth from nature.
            </p>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="hero__btn btn-bay"
            >
              <Link to="/shop">Shop Now</Link>
            </motion.button>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
