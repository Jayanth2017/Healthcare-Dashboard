
import React from 'react';
import styles from './ActivitySection.module.css';

function ActivitySection() {
  
  const activityData = [
    { day: 'Mon', bars: [0.7, 0.4] }, 
    { day: 'Tues', bars: [0.3, 0.8] },
    { day: 'Wed', bars: [0.6, 0.5] },
    { day: 'Thurs', bars: [0.8, 0.3] },
    { day: 'Fri', bars: [0.5, 0.7] },
    { day: 'Sat', bars: [0.2, 0.6] },
    { day: 'Sun', bars: [0.9, 0.4] },
  ];

  return (
    <div className={styles.activitySection}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.appointmentsCount}>3 appointment on this week</span>
      </div>
      <div className={styles.chartContainer}>
        {activityData.map((data, index) => ( 
          <div key={data.day} className={styles.dayColumn}> 
            <div className={styles.barContainer}>
              <div
                className={styles.barPrimary}
                style={{ height: `${data.bars[0] * 100}%` }}
              ></div>
              
              <div
                className={styles.barSecondary}
                style={{ height: `${data.bars[1] * 100}%` }}
              ></div>
            </div>
            <span className={styles.dayLabel}>{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivitySection;