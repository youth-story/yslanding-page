import React, { useState, useEffect } from "react";
import header_logo from "./header_logo.png";
import styles from "./Header.module.css";

export default function Header({ scroller }) {
  const [daysRemaining, setDaysRemaining] = useState(22);

  useEffect(() => {
    const today = new Date();
    const launchDate = new Date("2023-12-16");

    if (today.toDateString() === launchDate.toDateString()) {
      setDaysRemaining(0);
    } else {
      const daysLeft = Math.ceil(
        (launchDate - today) / (24 * 60 * 60 * 1000)
      );

      if (daysLeft >= 1) {
        setDaysRemaining(daysLeft);
      } else {
        setDaysRemaining(0);
      }
    }
  }, []);

  return (
    <>
      <div className={styles.mobView}>
        <div className={styles.cont}>
          <img src={header_logo} alt="D2D Logo" />
          {daysRemaining > 0 ? (
            <p className={styles.para}>
              <span className={styles.daysCount}>{daysRemaining}</span>{" "}
              {daysRemaining === 1 ? " day" : " days"}{" "}
              <span style={{ color: "greenyellow" }}>untill launch</span>
            </p>
          ) : (
            <p className={styles.launched}>We are launching today!</p>
          )}
        </div>
        <button className={styles.btn} onClick={scroller}>
          Know More
        </button>
      </div>
      <div className={styles.container}>
        <img src={header_logo} alt="D2D Logo" />
        <div className={styles.group}>
          {daysRemaining > 0 ? (
            <p className={styles.para}>
              <span className={styles.daysCount}>{daysRemaining}</span>{" "}
              {daysRemaining === 1 ? " day" : " days"}{" "}
              <span style={{ color: "greenyellow" }}>untill launch</span>
            </p>
          ) : (
            <p className={styles.launched}>We are launching today!</p>
          )}
          <button className={styles.btn} onClick={scroller}>
            Know More
          </button>
        </div>
      </div>
    </>
  );
}
