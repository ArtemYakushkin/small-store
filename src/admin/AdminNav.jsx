import React from "react";
import { NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import "../style/admin-nav.css";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <header className="admin__header">
        <div className="container">
          <div className="admin__wrapper">
            <div className="logo">
              <span className="logo__icon">
                <i class="ri-shopping-bag-2-line"></i>
              </span>
              <div className="logo__info">
                <p className="logo__title header__logo-title">SmallStore</p>
                <p className="logo__text header__logo-text">Since 2024</p>
              </div>
            </div>
            <div className="admin__search">
              <span className="admin__icon-search">
                <i class="ri-search-line"></i>
              </span>
              <input
                className="admin__input"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="admin__icons">
              <span className="admin__icon">
                <i class="ri-notification-3-line"></i>
              </span>
              <span className="admin__icon">
                <i class="ri-settings-3-line"></i>
              </span>
              <img
                className="admin__user"
                src={currentUser && currentUser.photoURL}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      <section className="admin__menu">
        <div className="container">
          <div className="admin__menu-wrapper">
            <ul className="admin__menu-list">
              {admin__nav.map((item, index) => (
                <li className="admin__menu-item" key={index}>
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive ? "admin__active" : ""
                    }
                    to={item.path}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminNav;
