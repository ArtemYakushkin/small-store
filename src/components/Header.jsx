import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import "../style/header.css";
import user from "../assets/images/user-icon.png";
import MobileMenu from "./MobileMenu";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

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
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((open) => !open);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const { currentUser } = useAuth();

  const toggleProfileAction = () => {
    profileActionRef.current.classList.toggle("header__show-user-action");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/home">
            <div className="logo">
              <span className="logo__icon">
                <i class="ri-shopping-bag-2-line"></i>
              </span>
              <div className="logo__info">
                <p className="logo__title header__logo-title">SmallStore</p>
                <p className="logo__text header__logo-text">Since 2024</p>
              </div>
            </div>
          </Link>

          <div className="header__navigation">
            <ul className="header__menu">
              {nav__link.map((item, index) => (
                <li className="header__item" key={index}>
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive ? "header__active" : ""
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
            <span className="header__icon">
              <i class="ri-heart-line"></i>
              <span className="header__badge">0</span>
            </span>
            <span className="header__icon">
              <i class="ri-shopping-bag-line"></i>
              <span className="header__badge">{totalQuantity}</span>
            </span>
            <div className="header__user" onClick={toggleProfileAction}>
              <img src={currentUser ? currentUser.photoURL : user} alt="" />
              <div
                className="header__user-action"
                ref={profileActionRef}
                onClick={toggleProfileAction}
              >
                {currentUser ? (
                  <>
                    <span onClick={logout}>LogOut</span>
                  </>
                ) : (
                  <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                  </>
                )}
              </div>
            </div>
            <div className="mobile-menu">
              <span
                className="mobile-menu__icon"
                open={open}
                onClick={() => setOpen(!open)}
              >
                <i class="ri-menu-2-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
