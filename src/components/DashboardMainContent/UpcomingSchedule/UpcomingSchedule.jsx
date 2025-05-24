// src/components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule.jsx
import React from 'react';
import styles from './UpcomingSchedule.module.css';

function UpcomingSchedule() {
  const scheduleData = [
    {
      day: 'On Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '💉', // Syringe icon
          colorClass: 'greenCard', // Using a specific class for color
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️', // Eye icon
          colorClass: 'purpleCard', // Using a specific class for color
        },
      ],
    },
    {
      day: 'On Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️', // Heart icon
          colorClass: 'purpleCard', // Using a specific class for color
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧑‍⚕️', // Doctor icon (or brain if available)
          colorClass: 'greenCard', // Using a specific class for color
        },
      ],
    },
    // Add more days and appointments as needed
  ];

  return (
    <div className={styles.upcomingSchedule}>
      <h3 className={styles.sectionTitle}>The Upcoming Schedule</h3>
      
      {scheduleData.map((dayGroup) => (
        <div key={dayGroup.day} className={styles.dayGroup}>
          <h4 className={styles.dayHeader}>{dayGroup.day}</h4>
          <div className={styles.appointmentsGrid}>
            {dayGroup.appointments.map((appointment) => (
              <div key={appointment.id} className={`${styles.appointmentCard} ${styles[appointment.colorClass]}`}>
                <div className={styles.cardContent}>
                  <span className={styles.appointmentTitle}>{appointment.title}</span>
                  <span className={styles.appointmentTime}>{appointment.time}</span>
                </div>
                <div className={styles.appointmentIcon}>
                  {appointment.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;