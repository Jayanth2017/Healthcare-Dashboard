// src/components/DashboardMainContent/UpcomingAppointments/UpcomingAppointments.jsx
import React from 'react';
import styles from './UpcomingAppointments.module.css';

function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      type: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷', // Tooth icon
      bgColor: 'var(--primary-dark-blue)', // Darker blue for this card
    },
    {
      id: 2,
      type: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪', // Arm muscle icon
      bgColor: 'var(--primary-purple)', // Purple for this card
    },
    // Add more appointments as needed
  ];

  return (
    <div className={styles.upcomingAppointments}>
      {appointments.map((appointment) => (
        <div key={appointment.id} className={styles.appointmentCard} style={{ backgroundColor: appointment.bgColor }}>
          <div className={styles.appointmentDetails}>
            <span className={styles.appointmentType}>{appointment.type}</span>
            <span className={styles.appointmentTime}>{appointment.time}</span>
            <span className={styles.doctorName}>{appointment.doctor}</span>
          </div>
          <div className={styles.appointmentIcon}>
            {appointment.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingAppointments;