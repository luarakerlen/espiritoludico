'use client';

import { phoneNumber } from '../../helpers/consts';
import styles from './ComoFunciona.module.css';

export default function ComoFunciona() {
	const steps = [
		{
			number: '1',
			title: 'ESCOLHA',
			description:
				'Escolha seus jogos a partir da lista disponível, faça seu cadastro e o pedido.',
			icon: '🎯',
			color: '#e6397d',
		},
		{
			number: '2',
			title: 'RETIRE/RECEBA',
			description:
				'Combine por WhatsApp o método de entrega: buscar na loja ou receber em casa via aplicativo.',
			icon: '📦',
			color: '#005f99',
		},
		{
			number: '3',
			title: 'DIVIRTA-SE',
			description: 'Aproveite cada jogo o quanto quiser.',
			icon: '🎲',
			color: '#e6397d',
		},
		{
			number: '4',
			title: 'DEVOLVA',
			description: 'No dia marcado devolva o jogo.',
			icon: '✅',
			color: '#005f99',
		},
	];

	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber como funciona o aluguel de jogos.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	return (
		<section id='como-funciona' className={styles.comoFunciona}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>COMO FUNCIONA?</h2>
					<p className={styles.subtitle}>
						Alugar jogos de tabuleiro nunca foi tão fácil! Siga nossos 4 passos
						simples e comece a se divertir hoje mesmo.
					</p>
				</div>

				<div className={styles.steps}>
					{steps.map((step, index) => (
						<div
							key={step.number}
							className={styles.step}
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div
								className={styles.stepNumber}
								style={{ backgroundColor: step.color }}
							>
								{step.number}
							</div>

							<div className={styles.stepIcon}>{step.icon}</div>

							<h3 className={styles.stepTitle}>{step.title}</h3>

							<p className={styles.stepDescription}>{step.description}</p>

							<div className={styles.stepConnector}></div>
						</div>
					))}
				</div>

				<div className={styles.cta}>
					<div className={styles.ctaContent}>
						<h3>Pronto para começar?</h3>
						<p>
							Temos especialistas prontos para te ajudar a escolher o jogo
							perfeito para sua família, amigos ou evento.
						</p>
						<div className={styles.ctaActions}>
							<button
								onClick={() => openWhatsApp()}
								className={styles.primaryButton}
							>
								Falar com Especialista
							</button>
							<button
								onClick={() =>
									window.open('https://espiritoludico.lends.com.br/', '_blank')
								}
								className={styles.secondaryButton}
							>
								Ver Jogos Disponíveis
							</button>
						</div>
					</div>
				</div>

				<div className={styles.benefits}>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>⚡</span>
						<div>
							<h4>Rápido e Fácil</h4>
							<p>Cadastro em minutos e aprovação imediata</p>
						</div>
					</div>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>🎲</span>
						<div>
							<h4>Variedade Imensa</h4>
							<p>Mais de 80 jogos diferentes para escolher</p>
						</div>
					</div>
					<div className={styles.benefit}>
						<span className={styles.benefitIcon}>💬</span>
						<div>
							<h4>Suporte Total</h4>
							<p>Ajuda para escolher os melhores jogos pra sua turma</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
