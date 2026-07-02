'use client';

import { SymplaButton, WhatsappButton } from '../Buttons/Buttons';
import Image from 'next/image';
import Countdown from '../Countdown/Countdown';
import styles from './Hero.module.css';
import { AnalyticsLabel } from '../../lib/analytics/labels';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.artContainer}>
					<Image
						src='/artes-investicacao/arte-principal.png'
						alt='Espírito Lúdico Game Night - Investigação'
						width={800}
						height={600}
						className={styles.mainArt}
						priority
					/>
				</div>

				<div className={styles.buttonsContainer}>
					<SymplaButton label={AnalyticsLabel.BOTAO_SYMPLA_HERO} />
					<WhatsappButton label={AnalyticsLabel.BOTAO_WHATSAPP_HERO} />
				</div>

				<Countdown />
			</div>
		</section>
	);
};

export default Hero;
