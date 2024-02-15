import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrendingProducts from "../components/TrendingProducts";
import BestSales from "../components/BestSales";
import TimerCount from "../components/TimerCount";
import NewArrival from "../components/NewArrival";
import PopularCategory from "../components/PopularCategory";
import products from "../assets/data/products";

const Home = () => {
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
      (item) => item.category === "mobile"
    );
    const filterdWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterdPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setPopularProducts(filterdPopularProducts);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={"Home"}>
      <Hero />
      <Services />
      <TrendingProducts data={trendingProducts} />
      <BestSales data={bestSalesProducts} />
      <TimerCount />
      <NewArrival data={mobileProducts} data2={wirelessProducts} />
      <PopularCategory data={popularProducts} />
    </Helmet>
  );
};

export default Home;
