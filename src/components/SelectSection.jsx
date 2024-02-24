import React from "react";

import "../style/select-section.css";

const SelectSection = ({ handleFilter, handleSearch }) => {
  return (
    <section className="filter">
      <div className="container">
        <div className="filter__wrapper">
          <div className="filter__select-wrap">
            <select className="filter__select" onChange={handleFilter}>
              <option className="filter__option">Filter By Category</option>
              <option className="filter__option" value="sofa">
                Sofa
              </option>
              <option className="filter__option" value="chair">
                Chair
              </option>
              <option className="filter__option" value="mobile">
                Mobile
              </option>
              <option className="filter__option" value="watch">
                Watch
              </option>
              <option className="filter__option" value="wireless">
                Wireless
              </option>
            </select>
            {/* <select className="filter__select">
              <option className="filter__option">Sort By</option>
              <option className="filter__option" value="ascending">
                Ascending
              </option>
              <option className="filter__option" value="descending">
                Descending
              </option>
            </select> */}
          </div>
          {/* <div className="filter__search">
            <span className="filter__icon">
              <i class="ri-search-line"></i>
            </span>
            <input
              className="filter__input"
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SelectSection;
