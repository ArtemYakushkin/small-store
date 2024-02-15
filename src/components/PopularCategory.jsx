import React from "react";

import ProductsList from "./ProductsList";

const PopularCategory = ({ data }) => {
  return (
    <section className="sales">
      <div className="container">
        <h2 className="section__title">Popular in Category</h2>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default PopularCategory;
