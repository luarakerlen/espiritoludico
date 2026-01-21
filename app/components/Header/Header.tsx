'use client';

import { useState } from "react";
import Image from 'next/image';
import styles from './Header.module.css';
import { phoneNumber } from '../../helpers/consts';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: 'smooth' });
		setMobileMenuOpen(false);
	};

	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber mais sobre os jogos de tabuleiro.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image
						src='/logo_comprida_rosa.png'
						alt='Espírito Lúdico Logo'
						width={180}
						height={40}
						className={styles.logoImage}
					/>
				</div>

				<nav className={`${mobileMenuOpen ? styles.navOpen : styles.nav}`}>
					<button
						onClick={() => scrollToSection('como-funciona')}
						className={styles.navLink}
					>
						Como funciona
					</button>
					<button
						onClick={() => scrollToSection('por-que-alugar')}
						className={styles.navLink}
					>
						Por que alugar
					</button>
					<button
						onClick={() => scrollToSection('categorias')}
						className={styles.navLink}
					>
						Jogos
					</button>
					<button
						onClick={() => scrollToSection('eventos')}
						className={styles.navLink}
					>
						Eventos
					</button>
					<button
						onClick={() => scrollToSection('comunidade')}
						className={styles.navLink}
					>
						Comunidade
					</button>
					<button
						onClick={() => scrollToSection('quem-somos')}
						className={styles.navLink}
					>
						Quem somos
					</button>
				</nav>

				<div className={styles.actions}>
					<button
						onClick={() => openWhatsApp()}
						className={`${styles.button} ${styles.whatsappButton}`}
					>
						WhatsApp
					</button>
					<button
						onClick={() =>
							window.open('https://espiritoludico.lends.com.br/', '_blank')
						}
						className={`${styles.button} ${styles.rentButton}`}
					>
						<img src='/Pino_branco.png' alt='WhatsApp' width={20} height={20} />
						Alugar Jogos
					</button>
				</div>

				<button className={styles.mobileMenuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	);
}
