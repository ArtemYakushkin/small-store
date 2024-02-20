import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import "../style/cart.css";
import { cartActions } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="cart">
        <div className="container">
          <div className="cart__wrapper">
            {cartItems.length === 0 ? (
              <h2 className="section__title">No item added to the cart</h2>
            ) : (
              <>
                <div className="cart__list">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart__total">
                  <div className="cart__total-box">
                    <h6 className="cart__total-title">Subtotal</h6>
                    <p className="cart__total-price">${totalAmount}</p>
                  </div>
                  <p className="cart__total-atention-text">
                    Taxes and shipping will calculate in checkout
                  </p>
                  <div className="cart__btn-box">
                    <button className="btn-bay">
                      <Link to="/shop">Continue Shopping</Link>
                    </button>
                    <button className="btn-bay">
                      <Link to="/checkout">Checkout</Link>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i onClick={deleteProduct} class="ri-delete-bin-2-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
