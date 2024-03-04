import React from "react";

import ProductsList from "./ProductsList";

const TrendingProducts = ({ data }) => {
  return (
    <section className="trending" id="trending">
      <div className="container">
        <div className="subtitle-box" style={{ marginBottom: "30px" }}>
          <span className="subtitle-line"></span>
          <p className="subtitle">Trending Products</p>
        </div>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default TrendingProducts;
