'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
		if (!hasAcceptedCookies) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookiesAccepted', 'true');
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className={styles.cookieBanner}>
			<div className={styles.container}>
				<p className={styles.text}>
					Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
				</p>
				<button onClick={handleAccept} className={styles.acceptButton}>
					Entendi
				</button>
			</div>
		</div>
	);
};

export default CookieBanner;
