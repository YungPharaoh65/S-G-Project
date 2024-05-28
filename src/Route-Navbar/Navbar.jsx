import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/"><button className={styles['nav-button']}>Dashboard</button></Link>
        <Link to="/sales"><button className={styles['nav-button']}>Sales</button></Link>

         <Link to="/trackinglist"><button className={styles['nav-button']}>Trackinglist</button></Link>
         <Link to="/profile"><button className={styles['nav-button']}>Profile</button></Link>
        </nav>
    </div>
  );
};

export default Navbar;
