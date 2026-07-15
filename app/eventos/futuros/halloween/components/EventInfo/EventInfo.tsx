import styles from './EventInfo.module.css';

const EventInfo = () => {
	const steps = [
		{
			number: '01',
			title: 'Receba seu grimório',
			description:
				'No início da noite, você e sua equipe receberão o grimório místico: mapas da mansão assombrada, descrições das criaturas, runas antigas e pistas sobrenaturais.',
		},
		{
			number: '02',
			title: 'Decifre os mistérios',
			description:
				'Leiam as runas, analisem os símbolos, descubram os segredos escondidos. Cada pista pode revelar a verdade sobre a maldição que assola a mansão.',
		},
		{
			number: '03',
			title: 'Enfrente o medo',
			description:
				'Trabalhem em equipe, compartilhem descobertas e tentem quebrar a maldição antes que meia-noite chegue. A equipe que resolver o mistério primeiro ganha!',
		},
	];

	return (
		<section id="event-info" className={styles.eventInfo}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Como Funciona o Mistério de Halloween</h2>
					<div className={styles.decorationLine}></div>
				</div>

				<div className={styles.stepsContainer}>
					{steps.map((step, index) => (
						<div key={index} className={styles.stepCard}>
							<div className={styles.stepNumber}>{step.number}</div>

							<div className={styles.stepCardInner}>
								<div className={styles.stepContent}>
									<h3 className={styles.stepTitle}>{step.title}</h3>
									<p className={styles.stepDescription}>{step.description}</p>
								</div>

								<div className={styles.pumpkin}>
									<div className={styles.pumpkinBody}></div>
									<div className={styles.pumpkinStem}></div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.callToAction}>
					<p className={styles.ctaText}>
						🎃 Contamos com você: Reúna sua equipe e venha quebrar essa maldição!
					</p>
				</div>
			</div>
		</section>
	);
};

export default EventInfo;
