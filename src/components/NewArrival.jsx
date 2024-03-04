import React from "react";

import ProductsList from "./ProductsList";

const NewArrival = ({ data, data2 }) => {
  return (
    <section className="arrival" id="arrival">
      <div className="container">
        <div className="subtitle-box" style={{ marginBottom: "30px" }}>
          <span className="subtitle-line"></span>
          <p className="subtitle">New Arrivals</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <ProductsList data={data} />
          <ProductsList data={data2} />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
