import React from "react";

import "../style/services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <ul className="services__list">
          {serviceData.map((item, index) => (
            <li
              className="services__item"
              style={{ background: `${item.bg}` }}
              key={index}
            >
              <span className="services__icon">
                <i class={item.icon}></i>
              </span>
              <div className="services__info">
                <h3 className="services__item-title">{item.title}</h3>
                <p className="services__item-text">{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
