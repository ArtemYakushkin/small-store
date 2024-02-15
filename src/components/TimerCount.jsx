import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../style/timer-count.css";

const TimerCount = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("May 10, 2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <section className="timer">
      <div className="container">
        <div className="clock__top-content">
          <div className="clock__subtitle-box">
            <span className="clock__line"></span>
            <p className="clock__subtitle">Limited Offers</p>
          </div>
          <h3 className="clock__title">Quality Armchair</h3>
        </div>
        <div className="clock__wrapper">
          <div className="clock__data">
            <div className="clock__box">
              <h2 className="clock__number">{days}</h2>
              <h5 className="clock__leter">Days</h5>
            </div>
            <span className="clock__dots">:</span>
          </div>
          <div className="clock__data">
            <div className="clock__box">
              <h2 className="clock__number">{hours}</h2>
              <h5 className="clock__leter">Hours</h5>
            </div>
            <span className="clock__dots">:</span>
          </div>
          <div className="clock__data">
            <div className="clock__box">
              <h2 className="clock__number">{minutes}</h2>
              <h5 className="clock__leter">Minutes</h5>
            </div>
            <span className="clock__dots">:</span>
          </div>
          <div className="clock__data">
            <div className="clock__box">
              <h2 className="clock__number">{seconds}</h2>
              <h5 className="clock__leter">Seconds</h5>
            </div>
          </div>
        </div>
        <motion.button whileTap={{ scale: 1.2 }} className="clock__btn btn-bay">
          <Link to="/shop">Visit Store</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default TimerCount;
