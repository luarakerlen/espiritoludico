import styles from './EventInfo.module.css';

const EventInfo = () => {
	const steps = [
		{
			number: '01',
			title: 'Receba seu dossiê',
			description:
				'No início da noite, você e sua equipe receberão pastas com o dossiê completo: laudos da perícia, fotos dos suspeitos, depoimentos e pistas.',
		},
		{
			number: '02',
			title: 'Analise os documentos',
			description:
				'Leiam com atenção, analisem as evidências, anotem cada detalhe. Cada pista pode ser crucial para resolver o caso.',
		},
		{
			number: '03',
			title: 'Discutam suas teorias',
			description:
				'Trabalhem em equipe, compartilhem descobertas e tentem encontrar a verdade. A equipe que resolver o caso primeiro ganha!',
		},
	];

	return (
		<section id="event-info" className={styles.eventInfo}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Como Funciona a Investigação</h2>
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

								<div className={styles.pin}>
									<div className={styles.pinHead}></div>
									<div className={styles.pinLine}></div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.callToAction}>
					<p className={styles.ctaText}>
						Contamos com você: Reúna sua equipe e venha desvendar esse mistério!
					</p>
				</div>
			</div>
		</section>
	);
};

export default EventInfo;
