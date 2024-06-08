import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Trackinglist.module.css"; // Using CSS modules
import MOCK_DATA from "../MOCK_DATA.json"; // Adjust the path as necessary

import { Pie } from "react-chartjs-2"; // Added this so the react pie chart works: npm install react-chartjs-2 chart.js
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels'; // npm install chartjs-plugin-datalabels : displays the charts data into it


Chart.register(ArcElement, ChartDataLabels);

export const Trackinglist = () => {
  const initialData = MOCK_DATA.map((order) => ({
    id: order.Order_id,
    customer: order.Customer,
    status: order["Payment Status"],
    fulfilled: order["Fulfillment state"],
  }));

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate updating data every 5 seconds
      // Here you can fetch new data from an API
      // For demonstration, I'm just updating the status randomly
      const updatedData = data.map((order) => ({
        ...order,
        status:
          order.status === "paid fully"
            ? "refunded"
            : order.status === "refunded"
            ? "cancelled"
            : "paid fully",
      }));
      
      setData(updatedData);
    }, 5000);

    return () => clearInterval(timer);
  }, [data]);

  const statusCounts = data.reduce(
    (acc, order) => {
      if (order.fulfilled) {
        acc["fulfilled"] = (acc["fulfilled"] || 0) + 1;
      } else {
        acc["unfulfilled"] = (acc["unfulfilled"] || 0) + 1;
      }
      return acc;
    },
    { fulfilled: 0, unfulfilled: 0 }
  );

  const totalCount = Object.values(statusCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  const pieData = {
    labels: ["Fulfilled", "Unfulfilled"],
    datasets: [
      {
        label: "Order Status",
        data: [statusCounts.fulfilled, statusCounts.unfulfilled],
        backgroundColor: [
          "rgb(75, 192, 192)", // Green for Fulfilled
          "rgb(255, 99, 132)", // Red for Unfulfilled
        ],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[0];
          const total = dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
        color: '#fff',
        font: {
          size: '16',
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Trackinglist</h1>
      <div className={styles.container}>
        <div className={styles.graphbox}>
          <p className={styles.graphtext}>Total Sales</p>
          <p className={styles.graphnumber}>R 205 453</p>
          <p className={styles.graphtext}>over last week</p>
        </div>
      
      </div>
      <br />
      <div className={styles.pieChartContainer}>
        <Pie data={pieData} options={pieOptions} />
      </div>

    </div>
  );
};

export default Trackinglist;
