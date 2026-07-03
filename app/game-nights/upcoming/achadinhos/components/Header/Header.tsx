'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img
						src='/logos/logo_comprida_azul.png'
						alt='Espírito Lúdico'
						className={styles.logoImg}
					/>
				</div>

				<nav className={styles.nav}>
					<button
						onClick={() => scrollToSection('event-info')}
						className={styles.navLink}
					>
						Como Funciona
					</button>
					<button
						onClick={() => scrollToSection('event-details')}
						className={styles.navLink}
					>
						Informações
					</button>
					<button
						onClick={() => scrollToSection('tickets')}
						className={styles.navLink}
					>
						Ingressos
					</button>
					<Link href='/' className={styles.navLink}>
						Página Inicial
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
