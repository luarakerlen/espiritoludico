import type { Metadata } from 'next';
import AnalyticsTracker from './components/AnalyticsTracker/AnalyticsTracker';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EventInfo from './components/EventInfo/EventInfo';
import Tickets from './components/Tickets/Tickets';
import FAQ from './components/FAQ/FAQ';
import CookieBanner from './components/CookieBanner/CookieBanner';

import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Achadinhos da Espírito Lúdico - Espírito Lúdico',
	description:
		'Descubra jogos de tabuleiro incríveis que quase ninguém conhece! Ganhe estrelinhas e brindes em cada jogo experimentado.',
};

export default function AchadinhosPage() {
	return (
		<div className='achadinhosTheme'>
			<main className={styles.main}>
				<AnalyticsTracker />
				<Header />
				<Hero />
				<EventInfo />
				<Tickets />
				<FAQ />
				<CookieBanner />
			</main>
		</div>
	);
}
