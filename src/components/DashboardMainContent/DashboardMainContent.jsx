import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from './DashboardOverview/DashboardOverview';
import ActivitySection from './ActivitySection/ActivitySection';
import CalendarSection from './CalendarSection/CalendarSection';
import UpcomingAppointments from './UpcomingAppointments/UpcomingAppointments';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMain}>
      <section className={styles.leftColumn}>
        <div className={styles.placeholderCard}>
         <DashboardOverview />
        </div>
        <div className={styles.placeholderCard}>
         <ActivitySection/>
        </div>
        </section>
      <section className={styles.rightColumn}>
        <CalendarSection/>
        <UpcomingAppointments/>
        <div className={styles.placeholderCard}>
        </div>
        <div className={styles.placeholderCard}>
          <UpcomingSchedule/>
        </div>
      </section>
    </main>
  );
}

export default DashboardMainContent;