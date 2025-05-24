import React from 'react';
import styles from './CalendarSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CalendarSection() {
  const calendarDays = [
    { dayOfWeek: 'Mon', date: 25, isFaded: false, appointments: ['10:00', '11:00', '12:00'] },
    { dayOfWeek: 'Tues', date: 26, isToday: true, appointments: ['08:00', '09:00', '10:00'], highlightedTime: '09:00' },
    { dayOfWeek: 'Wed', date: 27, isFaded: false, appointments: ['12:00', '-', '13:00'] },
    { dayOfWeek: 'Thurs', date: 28, isFaded: false, appointments: ['10:00', '11:00', '-'], highlightedTime: '11:00' },
    { dayOfWeek: 'Fri', date: 29, isFaded: false, appointments: ['-', '14:00', '16:00'] },
    { dayOfWeek: 'Sat', date: 30, isFaded: false, appointments: ['12:00', '14:00', '15:00'], highlightedTime: '12:00' },
    { dayOfWeek: 'Sun', date: 31, isFaded: true, appointments: ['09:00', '10:00', '11:00'], highlightedTime: '09:00' },
  ];

  return (
    <div className={styles.calendarSection}>
      <div className={styles.calendarHeader}>
        <h4 className={styles.currentMonth}>October 2021</h4>
        <div className={styles.navArrows}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowIcon} />
          <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {calendarDays.map((dayData) => (
          <div
            key={dayData.date}
            className={`${styles.dayColumn} ${dayData.isToday ? styles.today : ''} ${dayData.isFaded ? styles.fadedDay : ''}`}
          >
            <span className={styles.dayOfWeek}>{dayData.dayOfWeek}</span>
            <span className={styles.date}>{dayData.date}</span>
            <div className={styles.appointments}>
              {dayData.appointments.map((time, idx) => (
                <span
                  key={idx}
                  className={`${styles.timeSlot} ${time === dayData.highlightedTime ? styles.highlightedTime : ''}`}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarSection;