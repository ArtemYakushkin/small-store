import React from "react";
import { motion } from "framer-motion";

import "../style/characteristics.css";

const Characteristics = ({ product, addToCart }) => {
  return (
    <section className="characteristics">
      <div className="container">
        <div className="characteristics__wrapper">
          <div className="characteristics__img">
            <img src={product.imgUrl} alt="" />
          </div>
          <div className="characteristics__info">
            <h2 className="characteristics__name">{product.productName}</h2>
            <p className="characteristics__price">
              {product.price} <span>$</span>
            </p>
            <p className="characteristics__category">
              Category: <span>{product.category}</span>
            </p>
            <p className="characteristics__short-text">{product.shortDesc}</p>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="characteristics__btn btn-bay"
              onClick={addToCart}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
        <p className="characteristics__description">{product.description}</p>
      </div>
    </section>
  );
};

export default Characteristics;
