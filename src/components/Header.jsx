import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import "../style/header.css";
import user from "../assets/images/user-icon.png";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="header__wrapper">
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

            <div
              className="header__navigation"
              ref={menuRef}
              onClick={menuToggle}
            >
              <ul className="header__menu">
                {nav__link.map((item, index) => (
                  <li className="header__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__icons">
              <span className="header__cart-heart">
                <i class="ri-heart-line"></i>
                <span className="header__badge">0</span>
              </span>
              <span className="header__cart-icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="header__badge">0</span>
              </span>
              <span className="header__user">
                <motion.img whileTap={{ scale: 1.2 }} src={user} alt="" />
              </span>
              <div className="mobile-menu">
                <span className="mobile-menu__icon" onClick={menuToggle}>
                  <i class="ri-menu-2-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
