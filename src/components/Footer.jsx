import React from "react";
import { Link } from "react-router-dom";

import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo-wrap">
            <Link to="/home">
              <div className="logo">
                <span className="logo__icon">
                  <i class="ri-shopping-bag-2-line"></i>
                </span>
                <div className="logo__info">
                  <h1 className="logo__title">SmallStore</h1>
                  <p className="logo__text">Since 2024</p>
                </div>
              </div>
            </Link>
            <p className="footer__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              consectetur cumque dignissimos qui facilis earum fuga maxime,
              pariatur voluptatum dolores!
            </p>
          </div>
          <div className="footer__center-wrap">
            <div className="footer__center-col">
              <h4 className="footer__quick-title">Top Categories</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#trending">Trending</a>
                </li>
                <li className="footer__item">
                  <a href="#best">Best Sales</a>
                </li>
                <li className="footer__item">
                  <a href="#arrival">New Arrivals</a>
                </li>
                <li className="footer__item">
                  <a href="#popular">Popular</a>
                </li>
              </ul>
            </div>
            <div className="footer__center-col">
              <h4 className="footer__quick-title">Useful Links</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="footer__item">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="footer__item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="footer__item">
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contact-wrap">
            <h4 className="footer__title-contact">Contact</h4>
            <ul className="footer__list-contact">
              <li className="footer__item-contact">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <p>01054 13/2b Yaroslaviv Val st, Kyiv, Ukraine</p>
              </li>
              <li className="footer__item-contact">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                <p>+380440000000</p>
              </li>
              <li className="footer__item-contact">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                <p>small_shop@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright-box">
          <p className="footer__copyright">
            Copyright 2024 developed by Artem Yakushkin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
