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
				<div className={styles.artContainer}>
					<Image
						src='/paginas-eventos/investicacao/arte-principal.png'
						alt='Espírito Lúdico Game Night - Halloween'
						width={800}
						height={600}
						className={styles.mainArt}
						priority
					/>
				</div>

				<div className={styles.buttonsContainer}>
					<SymplaButton
						variant='halloween'
					/>
					<WhatsappButton
						variant='halloween'
						eventName='Halloween'
					/>
				</div>

				<Countdown />
			</div>
		</section>
	);
};

export default Hero;
