import React from "react";

import ProductsList from "./ProductsList";

const BestSales = ({ data }) => {
  return (
    <section className="sales">
      <div className="container">
        <h2 className="section__title">Best Sales</h2>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default BestSales;
