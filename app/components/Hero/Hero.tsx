'use client';

import { phoneNumber } from '../../helpers/consts';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber mais sobre o aluguel de jogos de tabuleiro.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className={styles.hero}>
			<div className={styles.background}>
				<div className={styles.gradientOverlay}></div>
			</div>

			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.badge}>
						<span>Aluguel de Jogos de Tabuleiro</span>
					</div>

					<h1 className={styles.title}>
						JÁ PENSOU EM
						<span className={styles.highlight}> ALUGAR JOGOS</span>
						DE TABULEIRO?
					</h1>

					<p className={styles.subtitle}>
						Desperte o espírito lúdico em você e crie conexões autênticas e
						momentos inesquecíveis com quem você ama. <br />
						Tudo isso do conforto da sua casa.
					</p>

					<div className={styles.benefits}>
						<div className={styles.benefit}>
							<span className={styles.benefitIcon}>🎲</span>
							<span>Jogos Clássicos e Modernos</span>
						</div>
						<div className={styles.benefit}>
							<span className={styles.benefitIcon}>💰</span>
							<span>Preços Acessíveis</span>
						</div>
						<div className={styles.benefit}>
							<span className={styles.benefitIcon}>🏠</span>
							<span>Jogue em Casa</span>
						</div>
					</div>

					{/* <div className={styles.scrollIndicator}>
						<span></span>
						<span></span>
						<span></span>
					</div> */}
				</div>

				<div className={styles.visual}>
					<div className={styles.imageContainer}>
						<Image
							src='/jogos.png'
							alt='Aluguel de Jogos de Tabuleiro'
							fill
							className={styles.mainImage}
							priority
						/>
					</div>

					<div className={styles.floatingElements}>
						<div
							className={styles.floatingCard}
							style={{ top: '10%', left: '-10%' }}
						>
							<span>🎯</span>
							<span>Raciocínio</span>
						</div>
						<div
							className={styles.floatingCard}
							style={{ top: '30%', right: '-15%' }}
						>
							<span>🤝</span>
							<span>Colaboração</span>
						</div>
						<div
							className={styles.floatingCard}
							style={{ bottom: '20%', left: '-5%' }}
						>
							<span>💬</span>
							<span>Comunicação</span>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.secondaryContent}>
				<div className={styles.description}>
					<p>
						Os jogos de tabuleiro voltaram com força total! Com partidas rápidas
						e regras fáceis, são opções ideais para adultos, casais e famílias
						jogarem em casa.
					</p>
					<p>
						Se você ainda não conhece board games, fale com um de nossos
						especialistas para que possamos te indicar jogos tão legais quanto
						Uno, War ou Banco Imobiliário.
					</p>
				</div>

				<div className={styles.actions}>
					<button
						onClick={() => openWhatsApp()}
						className={`${styles.button} ${styles.primaryButton}`}
					>
						<Image
							src='/Pino_branco.png'
							alt='WhatsApp'
							width={20}
							height={20}
						/>
						Falar com Especialista
					</button>
					<button
						onClick={() => scrollToSection('como-funciona')}
						className={`${styles.button} ${styles.secondaryButton}`}
					>
						Como Funciona
					</button>
				</div>
			</div>
		</section>
	);
}
