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
            <p className="dashboard__title">Total Sales</p>
            <span className="dashboard__number">$7890</span>
          </div>
          <div className="dashboard__item">
            <p className="dashboard__title">Orders</p>
            <span className="dashboard__number">789</span>
          </div>
          <div className="dashboard__item">
            <p className="dashboard__title">Total Products</p>
            <span className="dashboard__number">{products.length}</span>
          </div>
          <div className="dashboard__item">
            <p className="dashboard__title">Total Users</p>
            <span className="dashboard__number">{users.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
