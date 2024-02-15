import React from "react";
import { NavLink } from "react-router-dom";

import "../style/mobile-menu.css";

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

const MobileMenu = ({ open, toggleMenu }) => {
  return (
    <div className={open ? "menu-open" : "menu"}>
      <ul className="mobile__list">
        {nav__link.map((item, index) => (
          <li className="mobile__item" key={index}>
            <NavLink
              className={(navClass) =>
                navClass.isActive ? "menu__active" : ""
              }
              to={item.path}
              onClick={toggleMenu}
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
