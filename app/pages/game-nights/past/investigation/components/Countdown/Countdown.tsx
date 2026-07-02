'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2026-02-07T18:30:00-03:00');

    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      <h3 className={`${styles.title} ${styles.titleTop}`}>Faltam</h3>
      <div className={styles.timeBlocks}>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span className={styles.label}>Dias</span>
        </div>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className={styles.label}>Horas</span>
        </div>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className={styles.label}>Minutos</span>
        </div>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
      <h3 className={`${styles.title} ${styles.titleBottom}`}>para o evento</h3>
    </div>
  );
};

export default Countdown;
