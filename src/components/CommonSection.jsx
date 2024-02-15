import React from "react";

import "../style/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common">
      <div className="container">
        <h1 className="common__title">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
