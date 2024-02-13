import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import "../style/hero.css";
import heroImg from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in 2024</p>
              <h2 className="hero__title">
                Make Your Interior More Minimalistic & Modern
              </h2>
              <p className="hero__text">
                Refresh your home by getting rid of unnecessary details and
                extra items. Choose furniture with simple forms that accentuate
                functionality and elegance. Monochromatic tones and neutral
                colors will create a tranquil atmosphere, while accents made of
                natural materials will add a touch of warmth from nature.
              </p>
              <motion.button whileTap={{ scale: 1.2 }} className="hero__btn">
                <Link to="/shop">SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
