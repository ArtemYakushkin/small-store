import React from "react";
import { NavLink } from "react-router-dom";

import "../style/admin-menu.css";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
    icon: "ri-dashboard-line",
  },
  {
    display: "All Products",
    path: "/dashboard/all-products",
    icon: "ri-instance-line",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
    icon: "ri-list-unordered",
  },
  {
    display: "Users",
    path: "/dashboard/users",
    icon: "ri-file-user-line",
  },
  {
    display: "Add Products",
    path: "/dashboard/add-products",
    icon: "ri-add-circle-line",
  },
];

const AdminMenu = () => {
  return (
    <section className="admin__menu">
      <div className="container">
        <ul className="admin__menu-list">
          {admin__nav.map((item, index, indexIcon) => (
            <>
              <li className="admin__menu-item-text" key={index}>
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "admin__active-text" : ""
                  }
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              </li>
              <li className="admin__menu-item-icon" key={indexIcon}>
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "admin__active-icon" : ""
                  }
                  to={item.path}
                >
                  <i class={item.icon}></i>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminMenu;
