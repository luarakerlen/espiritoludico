'use client';

import { SymplaButton, WhatsappButton } from '../Buttons/Buttons';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
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

				<div className={styles.buttonsContainer}>
					<SymplaButton />
					<WhatsappButton />
				</div>

				<div className={styles.tagline}>
					<p className={styles.taglineText}>
						✨ Descubra jogos incríveis que quase ninguém conhece!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
