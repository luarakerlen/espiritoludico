'use client';

import { SymplaButton, WhatsappButton } from '../../../../../components/ui';
import Image from 'next/image';
import Countdown from '../Countdown/Countdown';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.leftColumn}>
					<div className={styles.artContainer}>
						<Image
							src='/paginas-eventos/achadinhos/arte-principal.jpg'
							alt='Espírito Lúdico Game Night - Achadinhos'
							width={800}
							height={600}
							className={styles.mainArt}
							priority
						/>
					</div>

					<div className={styles.tagline}>
						<p className={styles.taglineText}>
							Descubra jogos incríveis que você ainda não conhece!
						</p>
					</div>
				</div>

				<div className={styles.rightColumn}>
					<div className={styles.buttonsContainer}>
						<SymplaButton />
						<WhatsappButton eventName='Achadinhos' />
					</div>

					<Countdown targetDate='2026-09-12T18:30:00' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
