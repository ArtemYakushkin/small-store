import React from "react";
import { useSelector } from "react-redux";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import "../style/checkout.css";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout">
        <div className="container">
          <div className="checkout__wrapper">
            <div className="checkout__form-box">
              <div className="checkout__form-title-box">
                <span className="checkout__line"></span>
                <h6 className="checkout__form-title">Billing Information</h6>
              </div>
              <form className="checkout__form">
                <input
                  className="checkout__input"
                  type="text"
                  placeholder="Enter your name"
                />

                <input
                  className="checkout__input"
                  type="email"
                  placeholder="Enter your email"
                />

                <input
                  className="checkout__input"
                  type="number"
                  placeholder="Phone number"
                />

                <input
                  className="checkout__input"
                  type="text"
                  placeholder="Street address"
                />

                <input
                  className="checkout__input"
                  type="text"
                  placeholder="City"
                />

                <input
                  className="checkout__input"
                  type="text"
                  placeholder="Postal code"
                />

                <input
                  className="checkout__input"
                  type="text"
                  placeholder="Country"
                />
              </form>
            </div>
            <div className="checkout__total-box">
              <div className="checkout__total-cart">
                <h6 className="checkout__total-item">
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6 className="checkout__total-item">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="checkout__total-item checkout__total-item-last">
                  Shipping:
                  <br />
                  free shipping <span>$0</span>
                </h6>
                <h4 className="checkout__total-end">
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="checkout__btn btn-bay">
                  Place an order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
