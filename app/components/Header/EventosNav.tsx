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
	onScrollToEventos: () => void;
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
	onScrollToEventos,
	onCloseMobileMenu,
}: EventosNavProps) {
	const [eventosOpen, setEventosOpen] = useState(false);
	const [pastOpen, setPastOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);

	const closeAll = () => {
		setEventosOpen(false);
		setPastOpen(false);
		setUpcomingOpen(false);
		onCloseMobileMenu();
	};

	const handleScrollToEventos = () => {
		onScrollToEventos();
		closeAll();
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
				>
					Eventos
				</button>
				<div className={styles.eventosDropdown}>
					<button
						type='button'
						className={styles.eventosDropdownItem}
						onClick={handleScrollToEventos}
					>
						O que é?
					</button>
					<div className={styles.eventosSubmenu}>
						<span className={styles.eventosDropdownItem}>
							Eventos anteriores
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
							Próximos eventos
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
					onClick={() => setEventosOpen(!eventosOpen)}
					aria-expanded={eventosOpen}
				>
					Eventos
					<span
						className={`${styles.chevron} ${eventosOpen ? styles.chevronOpen : ''}`}
						aria-hidden='true'
					>
						▼
					</span>
				</button>

				{eventosOpen && (
					<div className={styles.eventosAccordionContent}>
						<button
							type='button'
							className={`${styles.navLink} ${styles.eventosAccordionItem}`}
							onClick={handleScrollToEventos}
						>
							O que é?
						</button>

						<div className={styles.eventosAccordionGroup}>
							<button
								type='button'
								className={`${styles.navLink} ${styles.eventosAccordionSubTrigger}`}
								onClick={() => setPastOpen(!pastOpen)}
								aria-expanded={pastOpen}
							>
								Eventos anteriores
								<span
									className={`${styles.chevron} ${pastOpen ? styles.chevronOpen : ''}`}
									aria-hidden='true'
								>
									▼
								</span>
							</button>
							{pastOpen && (
								<div className={styles.eventosAccordionSubContent}>
									{pastGameNights.length === 0 ? (
										<span className={styles.eventosEmpty}>Nenhum evento</span>
									) : (
										pastGameNights.map((event) => (
											<Link
												key={event.slug}
												href={event.href}
												className={`${styles.navLink} ${styles.eventosAccordionLink}`}
												onClick={handleLinkClick}
											>
												{event.title}
											</Link>
										))
									)}
								</div>
							)}
						</div>

						<div className={styles.eventosAccordionGroup}>
							<button
								type='button'
								className={`${styles.navLink} ${styles.eventosAccordionSubTrigger}`}
								onClick={() => setUpcomingOpen(!upcomingOpen)}
								aria-expanded={upcomingOpen}
							>
								Próximos eventos
								<span
									className={`${styles.chevron} ${upcomingOpen ? styles.chevronOpen : ''}`}
									aria-hidden='true'
								>
									▼
								</span>
							</button>
							{upcomingOpen && (
								<div className={styles.eventosAccordionSubContent}>
									{upcomingGameNights.length === 0 ? (
										<span className={styles.eventosEmpty}>Nenhum evento</span>
									) : (
										upcomingGameNights.map((event) => (
											<Link
												key={event.slug}
												href={event.href}
												className={`${styles.navLink} ${styles.eventosAccordionLink}`}
												onClick={handleLinkClick}
											>
												{event.title}
											</Link>
										))
									)}
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
