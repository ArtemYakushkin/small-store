import React from "react";

import FormReview from "./FormReview";
import "../style/tab.css";

const Tab = ({
  tab,
  setTab,
  product,
  submitHandler,
  reviewUser,
  reviewMsg,
  rating,
  setRating,
}) => {
  return (
    <section className="tab">
      <div className="container">
        <div className="tab__wrapper">
          <div className="tab__select">
            <h6
              className={`${tab === "tab__desc" ? "tab__active" : ""}`}
              onClick={() => setTab("tab__desc")}
            >
              Description
            </h6>
            <h6
              className={`${tab === "tab__rev" ? "tab__active" : ""}`}
              onClick={() => setTab("tab__rev")}
            >
              Reviews ({product.reviews})
            </h6>
          </div>
          <div className="tab__result">
            {tab === "tab__desc" ? (
              <p className="tab__description">{product.description}</p>
            ) : (
              <div className="tab__review">
                <ul className="tab__review-list">
                  {product.reviews?.map((item, index) => (
                    <li className="tab__review-item" key={index}>
                      <p className="tab__review-name">Jon Carter</p>
                      <span className="tab__review-rating">
                        {item.rating} (rating)
                      </span>
                      <p className="tab__review-text">{item.text}</p>
                    </li>
                  ))}
                </ul>
                <FormReview
                  submitHandler={submitHandler}
                  reviewUser={reviewUser}
                  setRating={setRating}
                  reviewMsg={reviewMsg}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
