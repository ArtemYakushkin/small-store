import React from "react";

import useGetDate from "../hooks/useGetDate";
import "../style/dashboard.css";

const Dashboard = () => {
  const { data: products } = useGetDate("products");
  const { data: users } = useGetDate("users");

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__wrapper">
          <div className="dashboard__item">
            <div className="subtitle-box">
              <span className="subtitle-line"></span>
              <p className="subtitle">Total Sales</p>
            </div>
            <span className="dashboard__number">$7890</span>
          </div>
          <div className="dashboard__item">
            <div className="subtitle-box">
              <span className="subtitle-line"></span>
              <p className="subtitle">Orders</p>
            </div>
            <span className="dashboard__number">789</span>
          </div>
          <div className="dashboard__item">
            <div className="subtitle-box">
              <span className="subtitle-line"></span>
              <p className="subtitle">Total Products</p>
            </div>
            <span className="dashboard__number">{products.length}</span>
          </div>
          <div className="dashboard__item">
            <div className="subtitle-box">
              <span className="subtitle-line"></span>
              <p className="subtitle">Total Users</p>
            </div>
            <span className="dashboard__number">{users.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
