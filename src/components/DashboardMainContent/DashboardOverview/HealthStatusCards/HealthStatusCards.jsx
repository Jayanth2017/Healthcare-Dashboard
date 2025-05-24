import React from 'react';
import styles from './HealthStatusCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLungs,    // Lungs icon
  faTooth,    // Teeth icon
  faBone,     // Bone icon
  faInfoCircle // Info icon (small 'i' on cards)
} from '@fortawesome/free-solid-svg-icons';


function HealthStatusCard({ icon, title, date, statusColor, progress }) {
  
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <FontAwesomeIcon icon={icon} className={styles.cardIcon} />
        <h4 className={styles.cardTitle}>{title}</h4>
        <FontAwesomeIcon icon={faInfoCircle} className={styles.infoIcon} />
      </div>
      <p className={styles.cardDate}>{date}</p>
      <div className={styles.progressBarBackground}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%`, backgroundColor: statusColor }}
        ></div>
      </div>
    </div>
  );
}

function HealthStatusCards() {
  return (
    <div className={styles.healthStatusCardsContainer}>
      <HealthStatusCard
        icon={faLungs}
        title="Lungs"
        date="Date: 26 Okt 2021"
        statusColor="var(--danger-red)" 
        progress={60}
      />
      <HealthStatusCard
        icon={faTooth}
        title="Teeth"
        date="Date: 26 Okt 2021"
        statusColor="var(--success-green)" 
        progress={90}
      />
      <HealthStatusCard
        icon={faBone}
        title="Bone"
        date="Date: 26 Okt 2021"
        statusColor="var(--warning-orange)" 
        progress={75}
      />
      <a href="#" className={styles.detailsLink}>Details &rarr;</a>
    </div>
  );
}

export default HealthStatusCards;