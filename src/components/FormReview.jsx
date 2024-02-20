import React from "react";
import { motion } from "framer-motion";

import "../style/form-review.css";

const FormReview = ({ submitHandler, reviewUser, reviewMsg, setRating }) => {
  return (
    <form className="form" onSubmit={submitHandler}>
      <h4 className="form__title">Leave your experience</h4>
      <input
        className="form__input"
        type="text"
        placeholder="Enter name"
        ref={reviewUser}
        required
      />
      <div className="form__group">
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="form__star"
          onClick={() => setRating(1)}
        >
          1<i class="ri-star-s-fill"></i>
        </motion.span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="form__star"
          onClick={() => setRating(2)}
        >
          2<i class="ri-star-s-fill"></i>
        </motion.span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="form__star"
          onClick={() => setRating(3)}
        >
          3<i class="ri-star-s-fill"></i>
        </motion.span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="form__star"
          onClick={() => setRating(4)}
        >
          4<i class="ri-star-s-fill"></i>
        </motion.span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="form__star"
          onClick={() => setRating(5)}
        >
          5<i class="ri-star-s-fill"></i>
        </motion.span>
      </div>
      <textarea
        className="form__textarea"
        type="text"
        placeholder="Review Message..."
        ref={reviewMsg}
        required
      />
      <motion.button
        whileTap={{ scale: 1.2 }}
        className="form__btn btn-bay"
        type="submit"
      >
        Submit
      </motion.button>
    </form>
  );
};

export default FormReview;
