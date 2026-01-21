'use client';

import { phoneNumber } from '../../helpers/consts';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
	const openWhatsApp = (
		message: string = 'Olá! Gostaria de saber mais sobre a Espírito Lúdico.',
	) => {
		const encodedMessage = encodeURIComponent(message);
		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			'_blank',
		);
	};

	const openRentSite = () => {
		window.open('https://espiritoludico.lends.com.br/', '_blank');
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.about}>
						<div className={styles.logo}>
							<Image
								src='/Pino_rosa.png'
								alt='Espírito Lúdico'
								width={40}
								height={40}
							/>
							<span>Espírito Lúdico</span>
						</div>
						<p className={styles.description}>
							Despertando o espírito lúdico nas pessoas através de jogos de
							tabuleiro que criam conexões autênticas e momentos inesquecíveis.
						</p>
						<div className={styles.social}>
							<button
								onClick={() => openWhatsApp()}
								className={styles.socialButton}
								aria-label='WhatsApp'
							>
								<Image
									src='/Pino_branco.png'
									alt='WhatsApp'
									width={20}
									height={20}
								/>
							</button>
							<button
								className={styles.socialButton}
								aria-label='Instagram'
								onClick={() =>
									window.open('https://instagram.com/espiritoludico', '_blank')
								}
							>
								<span>📷</span>
							</button>
							<button
								className={styles.socialButton}
								aria-label='Facebook'
								onClick={() =>
									window.open('https://facebook.com/espiritoludico', '_blank')
								}
							>
								<span>📘</span>
							</button>
						</div>
					</div>

					<div className={styles.links}>
						<h3>Links Rápidos</h3>
						<ul>
							<li>
								<button onClick={() => scrollToSection('como-funciona')}>
									Como Funciona
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('por-que-alugar')}>
									Por Que Alugar
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('categorias')}>
									Jogos Disponíveis
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('quem-somos')}>
									Quem Somos
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('eventos')}>
									Eventos
								</button>
							</li>
						</ul>
					</div>

					<div className={styles.services}>
						<h3>Serviços</h3>
						<ul>
							<li>
								<button onClick={openRentSite}>Aluguel de Jogos</button>
							</li>
							<li>
								<button
									onClick={() =>
										openWhatsApp('Gostaria de saber sobre eventos corporativos')
									}
								>
									Eventos Corporativos
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										openWhatsApp('Gostaria de saber sobre aniversários')
									}
								>
									Aniversários
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										openWhatsApp('Gostaria de saber sobre eventos escolares')
									}
								>
									Eventos Escolares
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										openWhatsApp('Gostaria de entrar para a comunidade')
									}
								>
									Comunidade
								</button>
							</li>
						</ul>
					</div>

					<div className={styles.contact}>
						<h3>Contato</h3>
						<div className={styles.contactInfo}>
							<div className={styles.contactItem}>
								<span className={styles.contactIcon}>📍</span>
								<div>
									<strong>Endereço:</strong>
									<p>Cariacica, Espírito Santo</p>
								</div>
							</div>
							<div className={styles.contactItem}>
								<span className={styles.contactIcon}>📱</span>
								<div>
									<strong>WhatsApp:</strong>
									<button onClick={() => openWhatsApp()}>
										(27) 99524-0773
									</button>
								</div>
							</div>
							<div className={styles.contactItem}>
								<span className={styles.contactIcon}>📧</span>
								<div>
									<strong>E-mail:</strong>
									<button
										onClick={() =>
											window.open('mailto:contato@espiritoludico.com.br')
										}
									>
										contato@espiritoludico.com.br
									</button>
								</div>
							</div>
							<div className={styles.contactItem}>
								<span className={styles.contactIcon}>⏰</span>
								<div>
									<strong>Horário:</strong>
									<p>Seg-Sex: 9h-18h</p>
									<p>Sáb: 9h-14h</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.cta}>
					<div className={styles.ctaContent}>
						<h3>Pronto para começar a se divertir?</h3>
						<p>
							Fale conosco hoje mesmo e descubra o mundo dos jogos de tabuleiro!
						</p>
						<div className={styles.ctaButtons}>
							<button
								onClick={() => openWhatsApp()}
								className={styles.primaryButton}
							>
								<Image
									src='/Pino_branco.png'
									alt='WhatsApp'
									width={20}
									height={20}
								/>
								Falar Agora
							</button>
							<button onClick={openRentSite} className={styles.secondaryButton}>
								Ver Jogos
							</button>
						</div>
					</div>
				</div>

				<div className={styles.bottom}>
					<div className={styles.bottomContent}>
						<p className={styles.copyright}>
							© 2024 Espírito Lúdico. Todos os direitos reservados.
						</p>
						<div className={styles.bottomLinks}>
							<button onClick={() => window.open('/privacidade', '_blank')}>
								Política de Privacidade
							</button>
							<button onClick={() => window.open('/termos', '_blank')}>
								Termos de Uso
							</button>
						</div>
					</div>
				</div>
			</div>

			<button
				onClick={scrollToTop}
				className={styles.scrollTop}
				aria-label='Voltar ao topo'
			>
				<span>↑</span>
			</button>
		</footer>
	);
}
