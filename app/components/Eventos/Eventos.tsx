'use client';

import Image from 'next/image';
import styles from './Eventos.module.css';
import { phoneNumber } from '../../helpers/consts';

export default function Eventos() {
	const eventTypes = [
		{
			icon: '🎂',
			title: 'Aniversários',
			description:
				'Deixe seu aniversário ainda mais especial com jogos divertidos para todas as idades.',
			features: [
				'Jogos adequados para a faixa etária',
				'Monitor especializado disponível',
				'Decorções temáticas',
			],
		},
		{
			icon: '🏢',
			title: 'Confraternizações Empresariais',
			description:
				'Fortaleça o espírito de equipe com atividades que promovem colaboração e comunicação.',
			features: [
				'Jogos de team building',
				'Competições amistosas',
				'Medalhas personalizadas',
			],
		},
		{
			icon: '🏫',
			title: 'Eventos Escolares',
			description:
				'Educação divertida com jogos que desenvolvem raciocínio lógico e habilidades sociais.',
			features: [
				'Jogos educativos',
				'Alinhamento com currículo',
				'Material didático incluído',
			],
		},
		{
			icon: '🌟',
			title: 'Eventos Comunitários',
			description:
				'Leve diversão e conexão para sua comunidade com nossos jogos de tabuleiro.',
			features: [
				'Jogos para grandes grupos',
				'Acessibilidade',
				'Atividades inclusivas',
			],
		},
	];

	const communityBenefits = [
		{
			icon: '💬',
			title: 'Grupo Exclusivo WhatsApp',
			description:
				'Tire dúvidas, compartilhe experiências e receba dicas de outros jogadores.',
		},
		{
			icon: '🎮',
			title: 'Noites de Jogos',
			description:
				'Participe de eventos mensais com a comunidade e conheça novos jogos.',
		},
		{
			icon: '🏆',
			title: 'Torneios e Campeonatos',
			description: 'Compita com outros jogadores e ganhe prêmios exclusivos.',
		},
		{
			icon: '📚',
			title: 'Workshops e Treinamentos',
			description: 'Aprenda estratégias avançadas e regras de jogos complexos.',
		},
	];

	const openWhatsApp = (message: string) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	const joinCommunity = () => {
		openWhatsApp(
			'Olá! Gostaria de entrar para a comunidade da Espírito Lúdico.',
		);
	};

	const requestEvent = (eventType: string) => {
		openWhatsApp(
			`Olá! Tenho interesse em contratar um evento de ${eventType}. Podem me passar mais informações?`,
		);
	};

	return (
		<section id='eventos' className={styles.eventos}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>EVENTOS</h2>
					<p className={styles.subtitle}>
						Além do aluguel, criamos experiências memoráveis através de
						encontros de jogatinas com os nossos clientes e eventos particulares
					</p>
				</div>

				<div className={styles.content}>
					<div className={styles.gameNightSection}></div>

					<div className={styles.eventsSection}>
						<div className={styles.eventsHeader}>
							<h3>Eventos Corporativos e Sociais</h3>
							<p>
								Trabalhamos com eventos diversos: aniversários, confraternização
								de empresas, eventos em escolas, comunidades, etc.
							</p>
						</div>

						<div className={styles.eventTypes}>
							{eventTypes.map((eventType, index) => (
								<div
									key={index}
									className={styles.eventCard}
									style={{ animationDelay: `${index * 0.15}s` }}
								>
									<div className={styles.eventIcon}>{eventType.icon}</div>
									<h4>{eventType.title}</h4>
									<p>{eventType.description}</p>
									<ul className={styles.eventFeatures}>
										{eventType.features.map((feature, featureIndex) => (
											<li key={featureIndex}>{feature}</li>
										))}
									</ul>
									<button
										onClick={() => requestEvent(eventType.title)}
										className={styles.eventButton}
									>
										Solicitar Orçamento
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className={styles.testimonialSection}>
					<div className={styles.testimonialCard}>
						<div className={styles.testimonialContent}>
							<div className={styles.testimonialHeader}>
								<Image
									src='/Pino_branco.png'
									alt='Depoimento'
									width={40}
									height={40}
								/>
								<div>
									<h5>Evento Incrível!</h5>
									<div className={styles.rating}>
										{[...Array(5)].map((_, i) => (
											<span key={i} className={styles.star}>
												⭐
											</span>
										))}
									</div>
								</div>
							</div>
							<p>
								"Contratamos a Espírito Lúdico para a confraternização da
								empresa e foi sensacional! Os jogos selecionados foram perfeitos
								para quebrar o gelo e promover trabalho em equipe. Todos os
								funcionários amaram!"
							</p>
							<div className={styles.testimonialAuthor}>
								<strong>João Santos</strong>
								<span>Gerente de RH - Tech Company</span>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.contactSection}>
					<div className={styles.contactContent}>
						<h3>Pronto para criar momentos inesquecíveis?</h3>
						<p>
							Seja um evento corporativo, aniversário especial ou para entrar na
							nossa comunidade de jogadores, estamos prontos para transformar
							sua ideia em realidade.
						</p>
						<div className={styles.contactActions}>
							<button
								onClick={() =>
									openWhatsApp(
										'Olá! Gostaria de saber mais sobre eventos da Espírito Lúdico.',
									)
								}
								className={styles.primaryButton}
							>
								<Image
									src='/Pino_branco.png'
									alt='WhatsApp'
									width={20}
									height={20}
								/>
								Falar sobre Eventos
							</button>
							<button
								onClick={joinCommunity}
								className={styles.secondaryButton}
							>
								Entrar na Comunidade
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
