// Profile.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MOCK_DATA from '../MOCK_DATA.json'; // Ensure this path is correct
import styles from '../Route-Navbar/Profile.modules.css'; // Ensure this import is correct

const Profile = () => {

  const [totalCost, setTotalCost] = useState(() => {
    // Retrieve total cost from local storage, or use 0 if it doesn't exist
    const storedTotalCost = localStorage.getItem("totalCost");
    return storedTotalCost ? parseFloat(storedTotalCost) : 0;
  });
  const [fulfilledOrders, setFulfilledOrders] = useState(0);
  const [unfulfilledOrders, setUnfulfilledOrders] = useState(0);

  useEffect(() => {
    // Calculate the total cost
    const total = MOCK_DATA.reduce((acc, order) => {
      const amount = parseFloat(order.Total.replace(/[^0-9.-]+/g, "")) || 0;
      return acc + amount;
    }, 0);
    setTotalCost(total);
    localStorage.setItem("totalCost", total.toString()); // Store total cost in local storage

    // Calculate the number of fulfilled and unfulfilled orders
    const fulfilledCount = MOCK_DATA.filter(order => order["Fulfillment state"] === true).length;
    const unfulfilledCount = MOCK_DATA.filter(order => order["Fulfillment state"] === false).length;
    
    setFulfilledOrders(fulfilledCount);
    setUnfulfilledOrders(unfulfilledCount);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Admin ID : </h1>

      <div className="box">
        <br />
        <div className="circle"></div>
        <h3>Prince Msi.</h3>
        <p className='boxtext'>princemsimang27@gmail.com</p>
       <p className='editprofile'>edit profile</p>
        <br /><br />
        <hr />
      </div>

      <div className='headermoved'>
        <h2>Amount: ${totalCost.toFixed(2)}</h2> 
        <br /><br />
        <h2>Gigs : N/A</h2>
        <br /><br />
        <h2>My Orders: {fulfilledOrders.toLocaleString()} / {unfulfilledOrders.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default Profile;
