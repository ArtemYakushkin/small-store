import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import ProductsList from "../components/ProductsList";
import Characteristics from "../components/Characteristics";
import Tab from "../components/Tab";
import products from "../assets/data/products";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const [tab, setTab] = useState("tab__desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    // avgRating,
    // reviews,
    // description,
    // shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted!");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product Added Successfuly");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <Characteristics product={product} addToCart={addToCart} />
      <Tab
        tab={tab}
        setTab={setTab}
        product={product}
        submitHandler={submitHandler}
        reviewUser={reviewUser}
        reviewMsg={reviewMsg}
        rating={rating}
        setRating={setRating}
      />
      <section>
        <div className="container">
          <h2 className="section__title">You might also like</h2>
          <ProductsList data={relatedProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
