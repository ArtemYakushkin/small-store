import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import ProductsList from "../components/ProductsList";
import Characteristics from "../components/Characteristics";
import { cartActions } from "../redux/slices/cartSlice";
import { db } from "../firebase.config";
import useGetDate from "../hooks/useGetDate";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: products } = useGetDate("products");
  const docRef = doc(db, "products", id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product");
      }
    };
    getProduct();
  }, [docRef]);

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

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const reviewUserName = reviewUser.current.value;
  //   const reviewUserMsg = reviewMsg.current.value;

  //   const reviewObj = {
  //     userName: reviewUserName,
  //     text: reviewUserMsg,
  //     rating,
  //   };

  //   console.log(reviewObj);
  //   toast.success("Review submitted!");
  // };

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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <Characteristics product={product} addToCart={addToCart} />
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
