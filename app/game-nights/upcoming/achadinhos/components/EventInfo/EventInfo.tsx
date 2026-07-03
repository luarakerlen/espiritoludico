import styles from './EventInfo.module.css';

const EventInfo = () => {
	const steps = [
		{
			number: '01',
			title: 'Escolha um Achadinho',
			description:
				'Temos uma seleção especial de jogos de tabuleiro menos conhecidos, mas incríveis. Escolha qualquer um dos nossos "achadinhos" para começar sua jornada de descoberta.',
			icon: '🎯',
		},
		{
			number: '02',
			title: 'Jogue e Ganhe Estrelinhas',
			description:
				'Para cada achadinho que você jogar, você ganha uma estrelinha! Quanto mais jogos experimentar, mais estrelinhas acumula. É uma recompensa pela sua curiosidade.',
			icon: '⭐',
		},
		{
			number: '03',
			title: 'Troque por Brindes',
			description:
				'Cada estrelinha pode ser trocada por brindes exclusivos! Quanto mais estrelinhas, melhores os presentes. Todo o acervo também estará disponível para jogar livremente.',
			icon: '🎁',
		},
	];

	return (
		<section id="event-info" className={styles.eventInfo}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Como Funcionam os Achadinhos</h2>
					<div className={styles.decorationLine}></div>
					<p className={styles.subtitle}>
						Jogos Legais que Quase Ninguém Conhece - Descubra, Jogue e Ganhe!
					</p>
				</div>

				<div className={styles.stepsContainer}>
					{steps.map((step, index) => (
						<div key={index} className={styles.stepCard}>
							<div className={styles.stepNumber}>{step.number}</div>
							<div className={styles.stepIcon}>{step.icon}</div>

							<div className={styles.stepCardInner}>
								<div className={styles.stepContent}>
									<h3 className={styles.stepTitle}>{step.title}</h3>
									<p className={styles.stepDescription}>{step.description}</p>
								</div>

								<div className={styles.star}>
									<div className={styles.starShape}></div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.callToAction}>
					<p className={styles.ctaText}>
						✨ Venha expandir seus horizontes e descobrir novos jogos favoritos!
					</p>
				</div>
			</div>
		</section>
	);
};

export default EventInfo;
