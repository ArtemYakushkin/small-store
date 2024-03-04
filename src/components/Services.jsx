import React from "react";

import "../style/services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <ul className="services__list">
          <li className="services__item">
            <span className="services__icon">
              <i class="ri-truck-line"></i>
            </span>
            <div className="services__info">
              <h3 className="services__item-title">Free Shipping</h3>
              <p className="services__item-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li className="services__item">
            <span className="services__icon">
              <i class="ri-refresh-line"></i>
            </span>
            <div className="services__info">
              <h3 className="services__item-title">Easy Returns</h3>
              <p className="services__item-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li className="services__item">
            <span className="services__icon">
              <i class="ri-secure-payment-line"></i>
            </span>
            <div className="services__info">
              <h3 className="services__item-title">Secure Payment</h3>
              <p className="services__item-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li className="services__item">
            <span className="services__icon">
              <i class="ri-exchange-dollar-line"></i>
            </span>
            <div className="services__info">
              <h3 className="services__item-title">Back Guarantee</h3>
              <p className="services__item-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
