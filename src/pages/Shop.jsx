import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import ProductsList from "../components/ProductsList";
import SelectSection from "../components/SelectSection";
import products from "../assets/data/products";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Products" />
      <SelectSection handleFilter={handleFilter} handleSearch={handleSearch} />

      <section>
        <div className="container">
          {productsData.length === 0 ? (
            <h2 className="section__title">No products are found!</h2>
          ) : (
            <ProductsList data={productsData} />
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
