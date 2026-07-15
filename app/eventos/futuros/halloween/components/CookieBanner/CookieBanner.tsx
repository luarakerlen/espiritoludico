'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const hasAccepted = localStorage.getItem('cookiesAccepted');
		if (!hasAccepted) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookiesAccepted', 'true');
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<p className={styles.text}>
					Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
				</p>
				<button onClick={handleAccept} className={styles.button}>
					Entendi
				</button>
			</div>
		</div>
	);
};

export default CookieBanner;
