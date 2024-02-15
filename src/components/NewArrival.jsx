import React from "react";

import ProductsList from "./ProductsList";

const NewArrival = ({ data, data2 }) => {
  return (
    <section className="arrival">
      <div className="container">
        <h2 className="section__title">New Arrivals</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <ProductsList data={data} />
          <ProductsList data={data2} />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
