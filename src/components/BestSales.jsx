import React from "react";

import ProductsList from "./ProductsList";

const BestSales = ({ data }) => {
  return (
    <section className="sales" id="best">
      <div className="container">
        <div className="subtitle-box" style={{ marginBottom: "30px" }}>
          <span className="subtitle-line"></span>
          <p className="subtitle">Best Sales</p>
        </div>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default BestSales;
