import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Col } from "reactstrap";

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
    <Col lg="3" md="4" className="mb-4">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="product__category">{item.category}</span>
        </div>
        <div className="product__card-bottom">
          <span className="product__price">${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.1 }}
            className="product__add"
            onClick={addToCart}
          >
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
