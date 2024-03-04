import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrendingProducts from "../components/TrendingProducts";
import BestSales from "../components/BestSales";
import TimerCount from "../components/TimerCount";
import NewArrival from "../components/NewArrival";
import PopularCategory from "../components/PopularCategory";
import useGetDate from "../hooks/useGetDate";

const Home = () => {
  const { data: products, loading } = useGetDate("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filterdMobileProducts = products.filter(
      (item) => item.category === "armchair"
    );
    const filterdWirelessProducts = products.filter(
      (item) => item.category === "bed"
    );
    const filterdPopularProducts = products.filter(
      (item) => item.category === "table"
    );

    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setPopularProducts(filterdPopularProducts);
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={"Home"}>
      <Hero />
      <Services />
      {loading ? (
        <h3 className="section__title">Loading.....</h3>
      ) : (
        <TrendingProducts data={trendingProducts} />
      )}
      {loading ? (
        <h3 className="section__title">Loading.....</h3>
      ) : (
        <BestSales data={bestSalesProducts} />
      )}

      <TimerCount />
      {loading ? (
        <h3 className="section__title">Loading.....</h3>
      ) : (
        <NewArrival data={mobileProducts} data2={wirelessProducts} />
      )}
      {loading ? (
        <h3 className="section__title">Loading.....</h3>
      ) : (
        <PopularCategory data={popularProducts} />
      )}
    </Helmet>
  );
};

export default Home;
