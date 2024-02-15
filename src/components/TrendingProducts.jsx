import React from "react";

import ProductsList from "./ProductsList";

const TrendingProducts = ({ data }) => {
  return (
    <section className="trending">
      <div className="container">
        <h2 className="section__title">Trending Products</h2>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default TrendingProducts;
