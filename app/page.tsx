'use client';

import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import PorQueAlugar from './components/PorQueAlugar/PorQueAlugar';
import Categorias from './components/Categorias/Categorias';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';
import Instagram from './components/Instagram/Instagram';
import Comunidade from './components/Comunidade/Comunidade';

export default function Home() {
	useEffect(() => {
		const hash = window.location.hash.replace('#', '');
		if (hash) {
			const element = document.getElementById(hash);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}
		}
	}, []);

	return (
		<div className={styles.home}>
			<Header />
			<main className={styles.main}>
				<Hero />
				<ComoFunciona />
				<PorQueAlugar />
				<Categorias />
				<Comunidade />
				<QuemSomos />
				{/* <Instagram /> */}
			</main>
			<Footer />
		</div>
	);
}
