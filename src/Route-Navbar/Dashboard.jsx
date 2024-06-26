import React from "react";
import Navbar from "./Navbar";
import styles from "./Dashboard.module.css";
import { useState } from "react";

// date fuctionality:
export const formatDate = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  const date = now.getDate();
  const month = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};



const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className={styles.graphbox2}>
        <p className={styles.graphtext}>Ready For Shipment</p>
        <p className={styles.graphnumber}>132 lbs | 06pcs</p>
        <hr />
        <p className={styles.graphtext}>over last week</p>
      </div>

      <div className={styles.graphbox3}>
        <p className={styles.graphtext}>Avg. Transit Time</p>
        <p className={styles.graphnumber}>2 DAYS air | 5 DAY/S ship</p>
        <hr />
        <p className={styles.graphtext}>over last week</p>
      </div>

      <div className={styles.graphbox4}>
        <p className={styles.graphtext}>Set price</p>
        <p className={styles.graphnumber}>R 205 453</p>
        <p className={styles.graphtext}>over last week</p>
      </div>

      <div className={styles.graphbox5}>
        <p className={styles.graphtext}>Order Frequency</p>
        <p className={styles.graphnumber}>Friday, 10 May 2024</p>
        <p className={styles.graphtext}>over last week</p>
      </div>
      <br />
      <br />

      <div className={styles.vertbox}>
        <div className={styles.graphheader}>Order list Database</div>
        <div className={styles.date}>{formatDate()}</div>
        <div className={styles.movebtn}>
          <button className={styles.pendingshipments}>Pending Shipment</button>

          <button className={styles.downloadingreports}>
            Download Reports
          </button>
          <button className={styles.createshipment}>Create Shipment</button>
        </div>
      </div>

      <div className={styles.graphbox44}>
        <p className={styles.graphtext}>Total Sales</p>
        <p className={styles.graphnumber}></p>
        <p className={styles.graphtext}>over last week</p>
      </div>

      <div className={styles.graphbox45}>
        <p className={styles.graphtext}>Most Shipped Goods</p>
        <p className={styles.graphnumber}>R 205 453</p>
        <p className={styles.graphtext}>over last week</p>
      </div>

      <div className={styles.graphbox46}>
        <p className={styles.graphtext}>Transportation</p>
        <p className={styles.graphnumber}>R 205 453</p>
        <p className={styles.graphtext}>over last week</p>
      </div>

      <br />
    </div>
  );
};

export default Dashboard;
