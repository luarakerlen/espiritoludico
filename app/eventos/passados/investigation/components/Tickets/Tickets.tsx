'use client';

import { AnalyticsLabel } from '../../lib/analytics/labels';
import { SymplaButton, WhatsappButton } from '../../../../../components/ui';
import styles from './Tickets.module.css';

const Tickets = () => {
	const ticketTypes = [
		{
			type: 'Individual',
			price: 'R$ 30,00',
			description: 'Por detetive',
			salesUntil: '03 de fevereiro',
			features: [
				{
					text: 'Acesso completo à investigação',
					hasAccess: true,
				},
				{
					text: 'Acesso a todos os jogos de tabuleiro disponíveis',
					hasAccess: true,
				},
				{
					text: 'Não possui valor promocional',
					hasAccess: false,
				},
			],
			popular: false,
		},
		{
			type: 'Equipe',
			price: 'R$ 25,00',
			description: (
				<span>
					Por detetive
					<br />
					(a partir de 3 pessoas)
				</span>
			),
			salesUntil: '03 de fevereiro',
			features: [
				{
					text: 'Acesso completo à investigação',
					hasAccess: true,
				},
				{
					text: 'Acesso a todos os jogos de tabuleiro disponíveis',
					hasAccess: true,
				},
				{
					text: 'Valor promocional para equipes',
					hasAccess: true,
				},
			],
			popular: true,
		},
		{
			type: 'Simples',
			price: 'R$ 20,00',
			description: 'Por pessoa',
			salesUntil: '07 de fevereiro',
			features: [
				{
					text: 'Acesso ao ambiente do evento',
					hasAccess: true,
				},
				{
					text: 'Acesso a todos os jogos de tabuleiro disponíveis',
					hasAccess: true,
				},
				{
					text: 'Não participa da investigação',
					hasAccess: false,
				},
			],
			popular: false,
		},
	];

	const eventInfo = {
		date: '7 de Fevereiro',
		time: '18h30 às 22h',
		location: "Pizzaria e Galetos Berg'z",
	};

	return (
		<section id='event-details' className={styles.tickets}>
			<div className={styles.backgroundTexture}></div>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Informações do Evento</h2>
					<div className={styles.decorationLine}></div>
				</div>

				<div className={styles.eventDetails}>
					<div className={styles.detailCard}>
						<div className={styles.icon}>📅</div>
						<h3>Quando?</h3>
						<p>{eventInfo.date}</p>
						<p className={styles.infoDetail}>{eventInfo.time}</p>
					</div>

					<div className={styles.detailCard}>
						<div className={styles.icon}>📍</div>
						<h3>Onde?</h3>
						<p>{eventInfo.location}</p>
						<a
							href='https://maps.app.goo.gl/7pmy15VuanQq4ZwPA'
							target='_blank'
							rel='noopener noreferrer'
							className={`${styles.infoDetail} ${styles.infoDetailLink}`}
						>
							Ver no Google Maps
						</a>
					</div>
				</div>

				<div id='tickets' className={styles.ticketsHeader}>
					<h2 className={styles.title}>Ingressos</h2>
					<div className={styles.decorationLine}></div>
				</div>

				<div className={styles.ticketsGrid}>
					{ticketTypes.map((ticket, index) => (
						<div key={index} className={styles.ticketCard}>
							{ticket.popular && (
								<div className={styles.popularBadge}>Melhor Escolha</div>
							)}

							<div
								className={`${styles.ticketCardInner} ${ticket.popular ? styles.popular : ''}`}
							>
								<div className={styles.ticketHeader}>
									<h3 className={styles.ticketType}>{ticket.type}</h3>
									<div className={styles.price}>
										<span className={styles.currency}>{ticket.price}</span>
									</div>
									<p className={styles.ticketDescription}>
										{ticket.description}
									</p>
									<div className={styles.salesUntil}>
										Vendas até: {ticket.salesUntil}
									</div>
								</div>

								<ul className={styles.featuresList}>
									{ticket.features.map((feature, featureIndex) => (
										<li key={featureIndex} className={styles.feature}>
											<span className={styles.checkmark}>
												{feature.hasAccess ? '✓' : '✗'}
											</span>
											{feature.text}
										</li>
									))}
								</ul>

								<div className={styles.ticketButtons}>
									<SymplaButton
										label={`${AnalyticsLabel.BOTAO_SYMPLA}_${ticket.type.toLowerCase()}`}
										variant='investigation'
									/>
									<WhatsappButton
										label={`${AnalyticsLabel.BOTAO_WHATSAPP}_${ticket.type.toLowerCase()}`}
										ticketType={ticket.type}
										variant='investigation'
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tickets;
