'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {
	pastGameNights,
	upcomingGameNights,
	type GameNightEvent,
} from '../../helpers/gameNights';

type EventosNavProps = {
	onCloseMobileMenu: () => void;
};

function EventList({
	events,
	onLinkClick,
}: {
	events: GameNightEvent[];
	onLinkClick: () => void;
}) {
	if (events.length === 0) {
		return <span className={styles.eventosEmpty}>Nenhum evento</span>;
	}

	return events.map((event) => (
		<Link
			key={event.slug}
			href={event.href}
			className={styles.eventosFlyoutLink}
			onClick={onLinkClick}
		>
			{event.title}
		</Link>
	));
}

export default function EventosNav({
	onCloseMobileMenu,
}: EventosNavProps) {
	const [pastOpen, setPastOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);

	const closeAll = () => {
		setPastOpen(false);
		setUpcomingOpen(false);
		onCloseMobileMenu();
	};

	const handleLinkClick = () => {
		closeAll();
	};

	return (
		<div className={styles.eventosNav}>
			<div className={styles.eventosDesktop}>
				<button
					type='button'
					className={`${styles.navLink} ${styles.eventosTrigger}`}
					aria-haspopup='true'
					onClick={() => {
						window.location.href = '/eventos';
					}}
				>
					Eventos
				</button>
				<div className={styles.eventosDropdown}>
					<div className={styles.eventosSubmenu}>
						<span className={styles.eventosDropdownItem}>
							Eventos passados
							<span className={styles.submenuArrow} aria-hidden='true'>
								›
							</span>
						</span>
						<div className={styles.eventosFlyout}>
							<EventList events={pastGameNights} onLinkClick={handleLinkClick} />
						</div>
					</div>
					<div className={styles.eventosSubmenu}>
						<span className={styles.eventosDropdownItem}>
							Eventos futuros
							<span className={styles.submenuArrow} aria-hidden='true'>
								›
							</span>
						</span>
						<div className={styles.eventosFlyout}>
							<EventList
								events={upcomingGameNights}
								onLinkClick={handleLinkClick}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.eventosMobile}>
				<button
					type='button'
					className={`${styles.navLink} ${styles.eventosAccordionTrigger}`}
					onClick={() => {
						window.location.href = '/eventos';
					}}
				>
					Eventos
				</button>
			</div>
		</div>
	);
}
