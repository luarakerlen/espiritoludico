import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import PorQueAlugar from './components/PorQueAlugar/PorQueAlugar';
import Categorias from './components/Categorias/Categorias';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Eventos from './components/Eventos/Eventos';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';
import Instagram from './components/Instagram/Instagram';
import Comunidade from './components/Comunidade/Comunidade';

export default function Home() {
	return (
		<div className={styles.home}>
			<Header />
			<main className={styles.main}>
				<Hero />
				<ComoFunciona />
				<PorQueAlugar />
				<Categorias />
				<Eventos />
				<Comunidade />
				<QuemSomos />
				{/* <Instagram /> */}
			</main>
			<Footer />
		</div>
	);
}
