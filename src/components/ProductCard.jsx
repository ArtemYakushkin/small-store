import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <div className="product__item">
      <Link to={`/shop/${item.id}`}>
        <div className="product__img">
          <img src={item.imgUrl} alt="" />
        </div>
        <h3 className="product__name">{item.productName}</h3>
        <p className="product__category">{item.category}</p>
      </Link>
      <p className="product__price">
        {item.price}
        <span> $</span>
      </p>
      <span className="product__add" onClick={addToCart}>
        <i class="ri-add-line"></i>
      </span>
    </div>
  );
};

export default ProductCard;
