import React from "react";

import useAuth from "../hooks/useAuth";
import AdminMenu from "./AdminMenu";
import "../style/admin-nav.css";

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
            <div className="admin__icons">
              <img
                className="admin__user"
                src={currentUser && currentUser.photoURL}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <AdminMenu />
    </>
  );
};

export default AdminNav;
