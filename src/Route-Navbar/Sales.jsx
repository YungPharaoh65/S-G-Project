import styles from "./Sales.module.css";
import { useState } from "react";
import Stock from "../Stock/Stock";
import Navbar from "./Navbar";
// ERROR AT LINE 58 :-(

function Sales() {
  const [totalCost, setTotalCost] = useState(0);
  const [unfulfilledCount, setUnfulfilledCount] = useState(0);
  const [fulfilledCount, setFulfilledCount] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  return (
    //first Row Boxes with colors
    <header>
      <Navbar />
      <br />
      
      <h1>Sales Activity For: </h1>
      <div className={styles.box1}>
        <p className={styles.text1}>
          UnFurfilled Orders:{" "}
          <p className={styles.number}>{unfulfilledCount}</p> Quantity/s
        </p>
      </div>
      <div className={styles.moveyellow}>
        <div className={styles.move2}>
          <div className={styles.box2}>
            <p className={styles.text1}>
              To be Invoiced: <p className={styles.number}>{fulfilledCount}</p>{" "}
              Quantity/s
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles.move2}>
        <div className={styles.box3}>
          <p className={styles.text1}>
            Fulfilled Orders: <p className={styles.number}>{fulfilledCount}</p>{" "}
            Quantity/s
          </p>{" "}
        </div>
      </div>
      <div className={styles.move2}>
        <div className={styles.box4}>
          <p className={styles.text1}>
            Assigned To me: <p className={styles.number}>{totalOrders}</p>{" "}
            Quantity/s
          </p>{" "}
        </div>
      </div>
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */}
      <br />
      <div className={styles.box11}>
        <div className={styles.smallbox11}></div>{" "}
        <p className={styles.text11}>
          Out of stock products <p className={styles.number1}>N/A</p>{" "}
        </p>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box21}>
          <div className={styles.smallbox21}></div>
          <p className={styles.text11}>
            All products <p className={styles.number1}>N/A</p>{" "}
          </p>{" "}
        </div>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box31}>
          <div className={styles.smallbox31}></div>
          <p className={styles.text11}>
            Archived products <p className={styles.number1}>N/A</p>{" "}
          </p>{" "}
        </div>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box41}>
          <div className={styles.smallbox41}></div>
          <p className={styles.text11}>
            Quantity On Hand <p className={styles.number1}>{totalOrders}</p>{" "}
          </p>{" "}
        </div>
      </div>
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      <br />
      <div className={styles.move222}>
        <div className={styles.box71}>
          {" "}
          <br /><br />
          
          <p className={styles.topic2}>Received Orders</p>
          <p className={styles.topic2}>Total cost (USD)</p>
          <div className={styles.number2}>
            <p className={styles.receivedOrders}>{totalOrders} order/s</p>
            <p className={styles.totalCost}>${totalCost.toFixed(2)}</p>{" "}
            {/* how do i connect this on Header component to the total added amount from order.total on the Stock component on jsx*/}
          </div>
          
          {/* This is grouuped by the way*/}
          <p className={styles.topic3}> 🟧 - # 51- Henrik </p>
          <p className={styles.topic33}> Ernest Garbon </p>
          <p className={styles.topic3}> 🟦 - # 13 - Idette </p>
          <p className={styles.topic33}> Ernest Garbon </p>
          <p className={styles.topic3}> 🟪 - # 22 - Basile </p>
          <p className={styles.topic33}> Ernest Garbon </p>
          <p className={styles.topic3}> 🟥 - # 105 - Xena </p>
          <p className={styles.topic33}> Ernest Garbon </p>
          <div className={styles.number3}>
            <p className={styles.incomingAmount}>$25 00</p>
            <p className={styles.incomingAmount}>$25 00</p>

            <p className={styles.spaceAmount}>$25 00</p>
            <p className={styles.spaceAmount}>$25 00</p>
          </div>
          <p className={styles.topic22}>view all</p>
        </div>
      </div>
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      <br />
      <br />
      <br />
      <br />
      <br />

      

      <Stock
        setTotalCost={setTotalCost}
        setUnfulfilledCount={setUnfulfilledCount}
        setFulfilledCount={setFulfilledCount}
        setTotalOrders={setTotalOrders}
      />
    </header>

    
  );
}

export default Sales;
