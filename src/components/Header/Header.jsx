
import React from 'react';
import styles from './Header.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,      // Search icon
  faBell,        // Notification icon
  faPlus         // Plus icon for "Add" button
} from '@fortawesome/free-solid-svg-icons'; 


import userAvatar from '../../assets/profile.png'; 

function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.appTitle}>
        <h2>Healthcare<span className={styles.brandingDot}>.</span></h2>
      </div>
      <div className={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>

      
      <div className={styles.rightSection}>
        <div className={styles.iconButton}>
          <FontAwesomeIcon icon={faBell} />
        
        </div>

        
        <button className={styles.addButton}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

    
        <div className={styles.userProfile}>
          
          <img
            src={userAvatar} 
            alt="User Avatar"
            className={styles.userAvatar}
          />
          
        </div>
      </div>
    </header>
  );
}

export default Header;