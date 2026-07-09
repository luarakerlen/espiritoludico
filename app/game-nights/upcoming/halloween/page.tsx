import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EventInfo from './components/EventInfo/EventInfo';
import Tickets from './components/Tickets/Tickets';
import FAQ from './components/FAQ/FAQ';
import CookieBanner from './components/CookieBanner/CookieBanner';

import styles from './page.module.css';

export default function HalloweenPage() {
	return (
		<div className='halloweenTheme'>
			<main className={styles.main}>
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
