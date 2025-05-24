import React from 'react';
import styles from './AnatomySection.module.css';
import anatomyImage from '../../../../assets/anatomy.png'; 


function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.imageContainer}>
        <img src={anatomyImage} alt="Human Anatomy" className={styles.anatomyImage} />
        
    
        <div className={styles.indicator} style={{ top: '25%', left: '65%' }}>
          <div className={styles.indicatorContent}>
            <span className={styles.heartIcon}>❤️</span> Healthy Heart
          </div>
        </div>
        
    
        <div className={styles.indicator} style={{ top: '70%', left: '35%' }}>
          <div className={styles.indicatorContent} >
            <span className={styles.arrowIcon}></span> Healthy Leg➔
          </div>
        </div>
        
        
        <div className={styles.zoomIcon}>
          <span className={styles.zoomSymbol}>🔍</span>
        </div>
      </div>
      
      
      <div className={styles.progressBar}>
        <div className={styles.progressBarTrack}></div>
        <div className={styles.progressBarThumb}></div>
      </div>
    </div>
  );
}

export default AnatomySection;