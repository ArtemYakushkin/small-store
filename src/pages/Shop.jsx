import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import ProductsList from "../components/ProductsList";
import SelectSection from "../components/SelectSection";
// import products from "../assets/data/products";
import useGetDate from "../hooks/useGetDate";

const Shop = () => {
  const { data: products, loading } = useGetDate("products");
  const [productsData, setProductsData] = useState([]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "armchair") {
      const filteredProducts = products.filter(
        (item) => item.category === "armchair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "bed") {
      const filteredProducts = products.filter(
        (item) => item.category === "bed"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "table") {
      const filteredProducts = products.filter(
        (item) => item.category === "table"
      );
      setProductsData(filteredProducts);
    }
  };

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value;
  //   const searchedProducts = products.filter((item) =>
  //     item.productName.includes(searchTerm)
  //   );
  //   setProductsData(searchedProducts);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Products" />
      <SelectSection handleFilter={handleFilter} />
      <section>
        <div className="container">
          {loading ? (
            <h3 className="section__title">Loading.....</h3>
          ) : (
            <ProductsList data={productsData} />
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
