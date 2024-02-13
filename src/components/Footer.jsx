import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <Link to="/home">
              <div className="footer__logo">
                <span className="footer__logo-icon">
                  <i class="ri-shopping-bag-2-line"></i>
                </span>
                <div className="footer__logo-info">
                  <h1 className="footer__logo-title">SmallStore</h1>
                  <p className="footer__logo-text">Since 2024</p>
                </div>
              </div>
            </Link>
            <p className="footer__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              consectetur cumque dignissimos qui facilis earum fuga maxime,
              pariatur voluptatum dolores!
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="footer__quick-title">Top Categories</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li className="footer__item">
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li className="footer__item">
                  <Link to="#">Arm Chair</Link>
                </li>
                <li className="footer__item">
                  <Link to="#">Smart Watches</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
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
          </Col>
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="footer__quick-title">Contact</h4>
              <ul className="footer__list">
                <li className="footer__item item-contact">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>01054 13/2b Yaroslaviv Val st, Kyiv, Ukraine</p>
                </li>
                <li className="footer__item item-contact">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+380440000000</p>
                </li>
                <li className="footer__item item-contact">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>small_shop@gmail.com</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright 2024 developed by Artem Yakushkin. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
