'use client';

import Image from 'next/image';
import styles from './Categorias.module.css';
import { phoneNumber } from '../../helpers/consts';

export default function Categorias() {
	const categories = [
		{
			id: 1,
			title: 'Brisa',
			description:
				'Jogos leves, rápidos e descomplicados, perfeitos para um momento descontraído.',
			image: '/categorias/categoria-1.png',
			price: {
				'3 dias': null,
				'6 dias': 'R$ 10,00',
				'10 dias': 'R$ 15,00',
			},
			games: [
				'Lemur',
				'Color Addict',
				'Caiu Perdeu',
				'Duo Regna',
				'Córdoba',
				'Tapa Certo',
			],
			color: 'var(--primary-blue)',
		},
		{
			id: 2,
			title: 'Faísca',
			description:
				'Jogos ágeis e envolventes, que despertam a atenção e o raciocínio.',
			image: '/categorias/categoria-2.png',
			price: {
				'3 dias': 'R$ 15,00',
				'6 dias': 'R$ 20,00',
				'10 dias': 'R$ 25,00',
			},
			games: [
				'Trio',
				'Telma',
				'Uno Flip',
				'Quem Foi?',
				'Ue Stop!',
				'Cabanga!',
				'Dobble',
			],
			color: 'var(--primary-rose)',
		},
		{
			id: 3,
			title: 'Chama',
			description:
				'Jogos que equilibram diversão e desafio, aquecendo a mesa com estratégia e interação.',
			image: '/categorias/categoria-3.png',
			price: {
				'3 dias': 'R$ 25,00',
				'6 dias': 'R$ 30,00',
				'10 dias': 'R$ 35,00',
			},
			games: [
				'Lhama',
				'The Resistance',
				'Não Pode',
				'Perfil',
				'Palpite Certo',
				'War',
			],
			color: 'var(--primary-blue)',
		},
		{
			id: 4,
			title: 'Fogo',
			description:
				'Jogos imersivos, com mais profundidade e tomada de decisões impactantes.',
			image: '/categorias/categoria-4.png',
			price: {
				'3 dias': 'R$ 35,00',
				'6 dias': 'R$ 40,00',
				'10 dias': 'R$ 45,00',
			},
			games: [
				'Azul',
				'Ticket to Ride',
				'Harmonies',
				'Verdant',
				'Tapple',
				'Sagrada',
			],
			color: 'var(--primary-rose)',
		},
		{
			id: 5,
			title: 'Vulcão',
			description:
				'Os grandes desafios, que exigem dedicação e elevam a experiência ao máximo.',
			image: '/categorias/categoria-5.png',
			price: {
				'3 dias': 'R$ 45,00',
				'6 dias': 'R$ 50,00',
				'10 dias': 'R$ 55,00',
			},
			games: [
				'Klask',
				'Istanbul',
				'Brazil Imperial',
				'Turing Machine',
				"Tzolk'in: O Calendário Maia",
			],
			color: 'var(--primary-blue)',
		},
	];

	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber mais sobre os jogos disponíveis para aluguel.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	const openRentSite = () => {
		window.open('https://espiritoludico.lends.com.br/search', '_blank');
	};

	return (
		<section id='categorias' className={styles.categorias}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>QUAL JOGO ALUGAR?</h2>
					<p className={styles.subtitle}>
						Separamos nossos jogos em categorias. Abaixo você pode ver alguns
						jogos de cada categoria ou clicar no botão para ver todos os jogos
						disponíveis para aluguel e seus preços.
					</p>
				</div>

				<div className={styles.categoriesGrid}>
					{categories.map((category, index) => (
						<div
							key={category.id}
							className={styles.categoryCard}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className={styles.imageContainer}>
								<Image
									src={category.image}
									alt={category.title}
									fill
									className={styles.categoryImage}
								/>
							</div>

							<div className={styles.categoryContent}>
								<h3
									className={styles.categoryTitle}
									style={{ color: category.color }}
								>
									{category.title}
								</h3>

								<p className={styles.categoryDescription}>
									{category.description}
								</p>

								<div className={styles.gamesList}>
									<h4>Exemplos de jogos:</h4>
									<div className={styles.games}>
										{category.games.map((game, gameIndex) => (
											<span key={gameIndex} className={styles.gameTag}>
												{game}
											</span>
										))}
									</div>
								</div>

								<h4>Valor do aluguel:</h4>
								<div
									className={styles.priceTag}
									style={{ borderColor: category.color }}
								>
									<div className={styles.pricePeriods}>
										{Object.entries(category.price).map(([period, price]) =>
											price ? (
												<div
													key={period}
													className={styles.pricePeriod}
													style={{ color: category.color }}
												>
													<span className={styles.period}>{period}</span>
													<span className={styles.price}>{price}</span>
												</div>
											) : null,
										)}
									</div>
								</div>

								<div className={styles.categoryActions}>
									<button
										onClick={() =>
											openWhatsApp(
												`Olá! Tenho interesse em jogos da categoria ${category.title}`,
											)
										}
										className={styles.whatsappButton}
									>
										<Image
											src='/logos/Pino_branco.png'
											alt='WhatsApp'
											width={16}
											height={16}
										/>
										Saber mais
									</button>
									<button onClick={openRentSite} className={styles.rentButton}>
										Ver todos
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.expertHelp}>
					<div className={styles.expertContent}>
						<div className={styles.expertIcon}>
							<Image
								src='/logos/Pino_azul.png'
								alt='Especialista'
								width={60}
								height={70}
							/>
						</div>
						<div className={styles.expertText}>
							<h3>Não sabe qual escolher?</h3>
							<p>
								Estamos sempre prontos para te indicar jogos de tabuleiro que
								irão fazer suas noites de jogos inesquecíveis. Nos chame no
								WhatsApp e nos conte um pouco sobre sua experiência com jogos e
								quantas pessoas jogarão.
							</p>
							<p className={styles.highlight}>
								A medida que você alugar, nossas sugestões vão melhorando,
								baseadas no seu histórico.
							</p>
							<button
								onClick={() =>
									openWhatsApp(
										'Olá! Preciso de ajuda para escolher um jogo. Sou iniciante e jogaremos com [número] pessoas.',
									)
								}
								className={styles.expertButton}
							>
								Falar com Especialista
							</button>
						</div>
					</div>
				</div>

				<div className={styles.benefits}>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>🎯</span>
						<h4>Indicações Personalizadas</h4>
						<p>Recomendamos jogos baseados no seu perfil e histórico.</p>
					</div>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>📱</span>
						<h4>Reserve online</h4>
						<p>
							Retire ou receba no mesmo dia ou garanta o jogo desejado para
							outras datas.
						</p>
					</div>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>🔄</span>
						<h4>Renovação Facilitada</h4>
						<p>Gostou do jogo? Renove-o facilmente e continue a diversão!</p>
					</div>
				</div>
			</div>
		</section>
	);
}
