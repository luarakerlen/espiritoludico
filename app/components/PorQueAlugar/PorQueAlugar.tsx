'use client';

import Image from 'next/image';
import styles from './PorQueAlugar.module.css';
import { phoneNumber } from '../../helpers/consts';

export default function PorQueAlugar() {
	const benefits = [
		{
			title: 'Divirta-se offline',
			description:
				'Com toda a familia e amigos, longe das telas e conectado de verdade.',
			icon: '👨‍👩‍👧‍👦',
			color: '#e6397d',
		},
		{
			title: 'Conheça os melhores jogos',
			description:
				'Experimente os maiores jogos de tabuleiro sem precisar comprá-los.',
			icon: '🎯',
			color: '#005f99',
		},
		{
			title: 'Programa diferente e divertido',
			description: 'Saia da rotina com uma atividade que une todas as idades.',
			icon: '🎉',
			color: '#e6397d',
		},
		{
			title: 'Especialista para te ajudar',
			description:
				'Tenha um especialista para te indicar o jogo ideal para cada momento.',
			icon: '👨‍🏫',
			color: '#005f99',
		},
		{
			title: 'Entrega rápida',
			description:
				'Não espere dias por um frete. Receba ou retire no mesmo dia.',
			icon: '🚀',
			color: '#e6397d',
		},
		{
			title: 'Comunidade exclusiva',
			description:
				'Ganhe acesso a um grupo exclusivo de WhatsApp com dicas e novidades.',
			icon: '💬',
			color: '#005f99',
		},
	];

	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber mais sobre os benefícios de alugar jogos.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	return (
		<section id='por-que-alugar' className={styles.porQueAlugar}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>POR QUE ALUGAR?</h2>
					<p className={styles.subtitle}>
						Descubra todas as vantagens de alugar jogos de tabuleiro em vez de
						comprar
					</p>
				</div>

				<div className={styles.benefitsGrid}>
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className={styles.benefitCard}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div
								className={styles.benefitIcon}
								style={{ backgroundColor: benefit.color }}
							>
								{benefit.icon}
							</div>
							<h4>{benefit.title}</h4>
							<p>{benefit.description}</p>
						</div>
					))}
				</div>

				<div className={styles.content}>
					<div className={styles.leftContent}>
						<div className={styles.priceComparison}>
							<h3>Economia que faz a diferença</h3>
							<div className={styles.comparison}>
								<div className={styles.buyOption}>
									<div className={styles.optionHeader}>
										{/* <span className={styles.optionIcon}>🛒</span> */}
										<span className={styles.optionTitle}>Comprar</span>
									</div>
									<div className={styles.price}>
										<span className={styles.currency}>R$</span>
										<span className={styles.amount}>350</span>
										<span className={styles.period}>média por jogo</span>
									</div>
									<div className={styles.cons}>
										<span>⏰ Esperar vários dias pelo frete</span>
										<span>💸 Alto investimento inicial</span>
										<span>📦 Jogo fica parado depois</span>
									</div>
								</div>

								<div className={styles.vs}>
									<span>VS</span>
								</div>

								<div className={styles.rentOption}>
									<div className={styles.optionHeader}>
										{/* <span className={styles.optionIcon}>🎲</span> */}
										<span className={styles.optionTitle}>Alugar</span>
									</div>
									<div className={styles.price}>
										<span className={styles.currency}>R$</span>
										<span className={styles.amount}>10 - 55</span>
										<span className={styles.period}>pelos mesmos jogos</span>
									</div>
									<div className={styles.pros}>
										<span>⚡ Jogue ainda hoje</span>
										<span>💰 Economia imediata</span>
										<span>🔄 Sempre jogos novos</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.rightContent}>
						<div className={styles.cta}>
							<h4>Pronto para economizar e se divertir?</h4>
							<p>Fale conosco e descubra o plano perfeito para você!</p>
							<button
								onClick={() =>
									window.open('https://espiritoludico.lends.com.br/', '_blank')
								}
								className={styles.ctaButton}
							>
								Ver Jogos Disponíveis
							</button>
						</div>
					</div>
				</div>

				<div className={styles.testimonial}>
					<div className={styles.testimonialContent}>
						<div className={styles.quote}>
							<span className={styles.quoteIcon}>"</span>
							<p>
								O melhor lugar para aluguel de board games aqui no ES. Grande
								variedade de jogos, valor excelente e atendimento impecável. Se
								procura jogos de tabuleiro encontrou o lugar certo para
								encontrá-los.
							</p>
						</div>
						<div className={styles.author}>
							<div className={styles.authorInfo}>
								<h5>Chelsea Oliveira</h5>
								<span>Cliente da Espírito Lúdico</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
