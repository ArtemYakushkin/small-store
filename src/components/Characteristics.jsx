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
            <h2 className="characteristics__name section__title">
              {product.productName}
            </h2>
            <div className="characteristics__rating">
              <div className="characteristics__stars">
                <span className="characteristics__stars-icon">
                  <i class="ri-star-s-fill"></i>
                </span>
                <span className="characteristics__stars-icon">
                  <i class="ri-star-s-fill"></i>
                </span>
                <span className="characteristics__stars-icon">
                  <i class="ri-star-s-fill"></i>
                </span>
                <span className="characteristics__stars-icon">
                  <i class="ri-star-s-fill"></i>
                </span>
                <span className="characteristics__stars-icon">
                  <i class="ri-star-half-s-fill"></i>
                </span>
              </div>
              <p className="characteristics__quantity">
                ( <span>{product.avgRating}</span> ratings )
              </p>
            </div>
            <p className="characteristics__price">${product.price}</p>
            <p className="characteristics__category">
              Category: <span>{product.category.toUpperCase()}</span>
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
      </div>
    </section>
  );
};

export default Characteristics;
