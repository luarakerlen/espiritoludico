'use client';

import { SymplaButton, WhatsappButton } from '../../../../../components/ui';
import styles from './Tickets.module.css';

const Tickets = () => {
	const ticketTypes = [
		{
			type: 'Lote exclusivo',
			price: 'R$ 40,00',
			description: <span>
				Por dupla
				<br/>
				<span style={{ fontSize: '0.875rem' }}>Um ingresso para um veterano e um para um amigo que nunca esteve em nossos eventos.</span>
			</span>,
			salesUntil: 'Em breve',
			features: [
				{
					text: 'Exclusivo quem já esteve em nossos eventos anteriores e convidar um amigo que nunca foi',
					hasAccess: true,
				},
				{
					text: 'Acesso a todos os achadinhos selecionados',
					hasAccess: true,
				},
				{
					text: 'Ganhe estrelinhas por cada jogo jogado',
					hasAccess: true,
				},
				{
					text: 'Troque estrelinhas por brindes',
					hasAccess: true,
				},
				{
					text: 'Acesso a todo o acervo de jogos',
					hasAccess: true,
				},
			],
			popular: true,
		},
		{
			type: '1º Lote',
			price: 'R$ 25,00',
			description: 'Por pessoa',
			salesUntil: 'Em breve',
			features: [
				{
					text: 'Acesso a todos os achadinhos selecionados',
					hasAccess: true,
				},
				{
					text: 'Ganhe estrelinhas por cada jogo jogado',
					hasAccess: true,
				},
				{
					text: 'Troque estrelinhas por brindes',
					hasAccess: true,
				},
				{
					text: 'Acesso a todo o acervo de jogos',
					hasAccess: true,
				},
			],
			popular: false,
		},
		{
			type: '2º Lote',
			price: 'R$ 30,00',
			description: 'Por pessoa',
			salesUntil: 'Em breve',
			features: [
				{
					text: 'Acesso a todos os achadinhos selecionados',
					hasAccess: true,
				},
				{
					text: 'Ganhe estrelinhas por cada jogo jogado',
					hasAccess: true,
				},
				{
					text: 'Troque estrelinhas por brindes',
					hasAccess: true,
				},
				{
					text: 'Acesso a todo o acervo de jogos',
					hasAccess: true,
				},
			],
			popular: false,
		},
	];

	const eventInfo = {
		date: 'Em breve',
		time: '18h30 às 22h',
		location: 'A confirmar',
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
									<SymplaButton />
									<WhatsappButton ticketType={ticket.type} />
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
