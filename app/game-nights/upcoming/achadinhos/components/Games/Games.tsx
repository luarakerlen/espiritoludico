'use client';

import Image from 'next/image';
import styles from './Games.module.css';

interface Game {
	name: string;
	description: string;
	players: string;
	duration: string;
	image: string;
	ludopediaUrl: string;
}

const games: Game[] = [
	{
		name: 'Alien Ninjas',
		description: 'Um jogo de dedução social onde ninjas alienígenas tentam se infiltrar na Terra sem serem descobertos. Com mecânicas únicas de bluff e estratégia.',
		players: '3-6 jogadores',
		duration: '20-30 minutos',
		image: '/jogos/alieninjas.jpg',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/alien-ninjas',
	},
	{
		name: 'Lhama',
		description: 'Um jogo divertido e caótico onde você precisa gerenciar seu rebanho de lhamas enquanto evita desastres hilários. Perfeito para grupos que querem risadas garantidas.',
		players: '2-5 jogadores',
		duration: '30-45 minutos',
		image: '/jogos/lhama.jpeg',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/lhama',
	},
	{
		name: `Os Desejos do Sultão`,
		description: 'Um jogo de negociação e engenharia onde você compete para construir o palácio mais magnífico para o Sultão. Combine estratégia com diplomacia.',
		players: '3-5 jogadores',
		duration: '45-60 minutos',
		image: '/jogos/os-desejos-do-sultao.jpg',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/os-desejos-do-sultao',
	},
];

const Games = () => {
	return (
		<section id='games' className={styles.games}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>🎮 Achadinhos do Evento</h2>
					<div className={styles.decorationLine}></div>
					<p className={styles.subtitle}>
						Conheça alguns dos jogos incríveis que você vai descobrir no nosso Game Night
					</p>
				</div>

				<div className={styles.gamesGrid}>
					{games.map((game, index) => (
						<div key={index} className={styles.gameCard}>
							<div className={styles.gameImage}>
								<Image
									src={game.image}
									alt={game.name}
									width={400}
									height={300}
									className={styles.gameArt}
								/>
							</div>
							<div className={styles.gameContent}>
								<h3 className={styles.gameName}>{game.name}</h3>
								<p className={styles.gameDescription}>{game.description}</p>
								
								<div className={styles.gameInfo}>
									<div className={styles.infoItem}>
										<span className={styles.infoIcon}>👥</span>
										<span className={styles.infoText}>{game.players}</span>
									</div>
									<div className={styles.infoItem}>
										<span className={styles.infoIcon}>⏱️</span>
										<span className={styles.infoText}>{game.duration}</span>
									</div>
								</div>

								<a
									href={game.ludopediaUrl}
									target='_blank'
									rel='noopener noreferrer'
									className={styles.ludopediaLink}
								>
									Saiba mais na Ludopédia →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Games;
