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
		name: `Os Desejos do Sultão`,
		description:
			'Os Desejos do Sultão é um jogo fácil, divertido e estratégico, onde os jogadores são encarregados de realizar os Desejos do Sultão, baixando cartas no tabuleiro ou aplicando os seus efeitos.',
		players: '1-4 jogadores',
		duration: '60 minutos',
		image: '/jogos/os-desejos-do-sultao2.png',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/os-desejos-do-sultao',
	},
	{
		name: 'Lhama',
		description:
			'Você consegue derrotar a LHAMA? Tente se livrar de todas as suas cartas para não receber nenhuma ficha. Um jogo para toda família e todas as idades. Não importa se você é iniciante ou veterano nos jogos, LHAMA é rápido, divertido e viciante!',
		players: '2-6 jogadores',
		duration: '20 minutos',
		image: '/jogos/lhama2.png',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/-l-l-a-m-a',
	},
	{
		name: 'Alieninjas',
		description: 'Alieninjas traz 5 jogos únicos em uma única caixa, nos quais serão testados sua agilidade, memória e raciocínio, promovendo o vencedor ao cargo de comandante da instituição.',
		players: '2-6 jogadores',
		duration: '30 minutos',
		image: '/jogos/alieninjas2.jpg',
		ludopediaUrl: 'https://ludopedia.com.br/jogo/alieninjas',
	},
];

const Games = () => {
	return (
		<section id='games' className={styles.games}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Achadinhos do Evento</h2>
					<div className={styles.decorationLine}></div>
					<p className={styles.subtitle}>
						Conheça alguns dos jogos incríveis que você vai descobrir na nossa
						Game Night
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
