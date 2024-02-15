import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { cartActions } from "../redux/slices/cartSlice";

import "../style/product-card.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <div className="product__item">
      <div className="product__top">
        <Link to={`/shop/${item.id}`}>
          <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>
          <h3 className="product__name">{item.productName}</h3>
          <p className="product__category">{item.category}</p>
        </Link>
      </div>
      <div className="product__bottom">
        <p className="product__price">${item.price}</p>
        <motion.span
          whileTap={{ scale: 1.1 }}
          className="product__add"
          onClick={addToCart}
        >
          <i class="ri-add-line"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default ProductCard;
