import React from "react";

import ProductsList from "./ProductsList";

const PopularCategory = ({ data }) => {
  return (
    <section className="sales" id="popular">
      <div className="container">
        <div className="subtitle-box" style={{ marginBottom: "30px" }}>
          <span className="subtitle-line"></span>
          <p className="subtitle">Popular in Category</p>
        </div>
        <ProductsList data={data} />
      </div>
    </section>
  );
};

export default PopularCategory;
