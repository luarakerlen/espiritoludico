import AnalyticsTracker from './components/AnalyticsTracker/AnalyticsTracker';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EventInfo from './components/EventInfo/EventInfo';
import Tickets from './components/Tickets/Tickets';
import FAQ from './components/FAQ/FAQ';
import CookieBanner from './components/CookieBanner/CookieBanner';

import styles from './page.module.css';

export default function Home() {
	return (
		<div className='investigationTheme'>
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
