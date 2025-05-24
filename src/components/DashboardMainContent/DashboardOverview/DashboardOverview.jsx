import React from 'react';
import styles from './DashboardOverview.module.css';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import AnatomySection from './AnatomySection/AnatomySection';




function DashboardOverview() {
  return (
    <div className={styles.dashboardOverviewCard}>
        <AnatomySection/>
      <div className={styles.placeholderHealthCards}>
        <HealthStatusCards/>
      </div>
    </div>
  );
}

export default DashboardOverview;