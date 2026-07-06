'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

interface CountdownProps {
	targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = new Date(targetDate).getTime() - new Date().getTime();
			
			if (difference > 0) {
				return {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				};
			}
			
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		};

		setTimeLeft(calculateTimeLeft());
		
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const timeUnits = [
		{ value: timeLeft.days, label: 'dias' },
		{ value: timeLeft.hours, label: 'horas' },
		{ value: timeLeft.minutes, label: 'minutos' },
		{ value: timeLeft.seconds, label: 'segundos' },
	];

	return (
		<div className={styles.countdown}>
			<h3 className={styles.title}>⏰ Contagem Regressiva</h3>
			<div className={styles.timeContainer}>
				{timeUnits.map((unit, index) => (
					<div key={index} className={styles.timeUnit}>
						<div className={styles.timeValue}>{String(unit.value).padStart(2, '0')}</div>
						<div className={styles.timeLabel}>{unit.label}</div>
					</div>
				))}
			</div>
			<p className={styles.eventDate}>12 de Setembro de 2026</p>
		</div>
	);
};

export default Countdown;
