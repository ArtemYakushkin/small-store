import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import "../style/services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="services__item"
                style={{ background: `${item.bg}` }}
              >
                <span className="services__icon">
                  <i class={item.icon}></i>
                </span>
                <div className="services__info">
                  <h3 className="services__item-title">{item.title}</h3>
                  <p className="services__item-text">{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
