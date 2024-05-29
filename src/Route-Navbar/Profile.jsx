import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MOCK_DATA from '../MOCK_DATA.json'; // Ensure this path is correct
import styles from './Profile.module.css'; // Correct import

const Profile = () => {
  const [totalCost, setTotalCost] = useState(() => {
    // Retrieve total cost from local storage, or use 0 if it doesn't exist
    const storedTotalCost = localStorage.getItem("totalCost");
    return storedTotalCost ? parseFloat(storedTotalCost) : 0;
  });
  const [fulfilledOrders, setFulfilledOrders] = useState(0);
  const [unfulfilledOrders, setUnfulfilledOrders] = useState(0);

  const [adminId, setAdminId] = useState(''); // State for admin ID
  const [name, setName] = useState('Prince Msi.');
  const [email, setEmail] = useState('princemsimang27@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated details to local storage or send to a server
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <Navbar />
      <h1>Admin ID: {adminId}</h1>

      <div className={styles.box}>
        <br />
        <div className={styles.circle}>
          {profileImage && <img src={profileImage} alt="Profile" className={styles.profileImage} />}
        </div>

        <div className={styles.movieinput}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputer}
              />
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputer}
              />
              <br />
              <input
                type="file"
                onChange={handleImageUpload}
                className={styles.imageUpload}
              />
              <button className={styles.saveBtn} onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h3>{name}</h3>
              <p className={styles.boxtext}>{email}</p>
              <p className={styles.editprofile} onClick={handleEditToggle}>edit profile</p>
            </>
          )}
        </div>
        <br /><br />
        <hr />
      </div>

      <div className={styles.headermoved}>
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
