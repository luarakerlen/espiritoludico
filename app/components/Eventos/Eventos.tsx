'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Eventos.module.css';
import { phoneNumber } from '../../helpers/consts';

export default function Eventos() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	const eventImages = [
		'/eventos/1.jpg',
		'/eventos/2.jpg',
		'/eventos/3.jpg',
		'/eventos/4.jpg',
		'/eventos/5.jpg',
		'/eventos/6.jpg',
		'/eventos/7.jpg',
		'/eventos/8.jpg',
	];

	useEffect(() => {
		if (!isAutoPlay) return;

		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1,
			);
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlay, eventImages.length]);

	const goToPrevious = () => {
		setIsAutoPlay(false);
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1,
		);
	};

	const goToNext = () => {
		setIsAutoPlay(false);
		setCurrentImageIndex((prevIndex) =>
			prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const goToSlide = (index: number) => {
		setIsAutoPlay(false);
		setCurrentImageIndex(index);
	};

	const getVisibleImages = () => {
		const visible = [];
		const totalImages = eventImages.length;

		for (let i = 0; i < totalImages; i++) {
			visible.push(i);
		}

		return visible;
	};

	const eventTypes = [
		{
			icon: '🎂',
			title: 'Aniversários',
			description:
				'Deixe seu aniversário ainda mais especial com jogos divertidos para todas as idades.',
			features: [
				'Jogos adequados para a faixa etária',
				'Monitoria especializada disponível',
				'Brincadeiras e competições saudáveis',
			],
		},
		{
			icon: '🏢',
			title: 'Confraternizações Empresariais',
			description:
				'Fortaleça o espírito de equipe com atividades que promovem colaboração e comunicação.',
			features: [
				'Jogos para descontração',
				'Competições saudáveis',
				'Monitoria para explicação das regras',
			],
		},
		{
			icon: '🏫',
			title: 'Eventos Escolares',
			description:
				'Educação divertida com jogos que desenvolvem raciocínio lógico e habilidades sociais.',
			features: [
				'Jogos modernos na educação',
				'Desenvolvimento de raciocínio lógico e comunicação',
				'Competições saudáveis',
			],
		},
		{
			icon: '🌟',
			title: 'Eventos Comunitários',
			description:
				'Leve diversão e conexão para sua comunidade com nossos jogos de tabuleiro.',
			features: [
				'Jogos acessíveis e fáceis',
				'Brincadeiras e competições saudáveis',
				'Monitoria para explicação das regras',
			],
		},
	];

	const gameNightBenefits = [
		{
			icon: '🏆',
			title: 'Torneios Empolgantes',
			description:
				'Competição saudável com campeonatos e desafios para todos os níveis!',
		},
		{
			icon: '🎁',
			title: 'Sorteios, Brindes e Cupons',
			description:
				'Participe de sorteios, receba brindes e cupons de desconto exclusivos!',
		},
		{
			icon: '👥',
			title: 'Novas Amizades',
			description:
				'Conecte-se com outros boardgamers e expanda seu círculo de amigos!',
		},
		{
			icon: '🎲',
			title: 'Variedade de Jogos',
			description:
				'Experimente dezenas de jogos diferentes, dos clássicos aos lançamentos!',
		},
	];

	const openWhatsApp = (message: string) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
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
					<div className={styles.gameNightSection}>
						<div className={styles.gameNightContent}>
							<h3>Nossos Eventos de Jogos</h3>
							<p>
								Participe das nossas noites de jogos e tenha uma experiência
								memorável!
							</p>

							<div className={styles.gameNightBenefits}>
								{gameNightBenefits.map((benefit, index) => (
									<div key={index} className={styles.benefitCard}>
										<div className={styles.benefitIcon}>{benefit.icon}</div>
										<h4>{benefit.title}</h4>
										<p>{benefit.description}</p>
									</div>
								))}
							</div>

							<div className={styles.gameNightInfo}>
								<p>
									Confira nossa <strong> página no Sympla</strong> e
									<strong> acompanhe nosso Instagram</strong> para não perder os
									próximos eventos!
								</p>

								<div className={styles.gameNightActions}>
									<button
										onClick={() =>
											window.open(
												'https://www.sympla.com.br/produtor/espiritoludico',
												'_blank',
											)
										}
										className={styles.primaryButton}
									>
										Ver Próximos Eventos
									</button>
									<button
										onClick={() =>
											window.open(
												'https://www.instagram.com/espiritoludico',
												'_blank',
											)
										}
										className={styles.secondaryButton}
									>
										Seguir no Instagram
									</button>
								</div>
							</div>
						</div>
						<div className={styles.eventGallery}>
							<div className={styles.carouselContainer}>
								<div
									className={styles.carouselTrack}
									style={{
										transform: `translateX(-${currentImageIndex * (100 / getVisibleImages().length)}%)`,
									}}
								>
									{eventImages.map((image, index) => (
										<div
											key={index}
											className={`${styles.carouselSlide} ${index === currentImageIndex ? styles.active : ''}`}
											onClick={() => goToSlide(index)}
										>
											<img
												src={image}
												alt={`Evento ${index + 1}`}
												width={400}
												height={250}
											/>
										</div>
									))}
								</div>

								<button
									onClick={goToPrevious}
									className={styles.carouselButton}
									aria-label='Imagem anterior'
								>
									‹
								</button>

								<button
									onClick={goToNext}
									className={`${styles.carouselButton} ${styles.next}`}
									aria-label='Próxima imagem'
								>
									›
								</button>

								<div className={styles.carouselIndicators}>
									{eventImages.map((_, index) => (
										<button
											key={index}
											onClick={() => goToSlide(index)}
											className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
											aria-label={`Ir para imagem ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

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

						<div className={styles.contactSection}>
							<div className={styles.contactContent}>
								<h3>Pronto para criar momentos inesquecíveis?</h3>
								<p>
									Seja um evento corporativo, aniversário especial, eventos em
									escolas, hospitais ou comunitários, estamos prontos para
									transformar sua ideia em realidade.
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
											src='/Pino_azul.png'
											alt='WhatsApp'
											width={20}
											height={20}
										/>
										Falar sobre Eventos
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className={styles.testimonialSection}>
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
				</div> */}
			</div>
		</section>
	);
}
