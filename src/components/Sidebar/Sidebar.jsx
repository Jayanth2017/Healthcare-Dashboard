
import React from 'react';
import styles from './Sidebar.module.css';
import appStyles from '../../App.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTableColumns, // Dashboard
  faHistory,      // History
  faCalendarDays, // Calendar
  faUserInjured,  // Appointments
  faChartSimple,  // Statistics
  faComments,     // Chat
  faHeadset,      // Support
  faGear          // Setting
} from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  
  return (
    <aside className={`${styles.sidebar} ${appStyles.sidebarHiddenOnMobile}`}> 
      

      <nav className={styles.navigation}>
        <div className={styles.category}>
          <h3>General</h3>
          <ul>
            <li className={`${styles.navItem} ${styles.active}`}>
              <FontAwesomeIcon icon={faTableColumns} className={styles.navIcon} />
              <a href="#" className={styles.navLink}>Dashboard</a>
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faHistory} className={styles.navIcon} />
              <a href="History" className={styles.navLink}>History</a>
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faCalendarDays} className={styles.navIcon} />
              <a href="Calendar" className={styles.navLink}>Calendar</a>
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faUserInjured} className={styles.navIcon} />
              <a href="Appointments" className={styles.navLink}>Appointments</a>
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faChartSimple} className={styles.navIcon} />
              <a href="Statistics" className={styles.navLink}>Statistics</a>
            </li>
            
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Tools</h3>
          <ul>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faComments} className={styles.navIcon} />
              <a href="Chat" className={styles.navLink}>Chat</a>
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon icon={faHeadset} className={styles.navIcon} />
              <a href="Support" className={styles.navLink}>Support</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.setting}>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faGear} className={styles.navIcon} />
          <a href="Setting" className={styles.navLink}>Setting</a>
        </li>
      </div>
    </aside>
  );
}

export default Sidebar;