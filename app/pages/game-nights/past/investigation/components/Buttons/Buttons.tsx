import { trackEvent } from '../../lib/analytics';
import { AnalyticsCategory } from '../../lib/analytics/categories';
import { AnalyticsEvent } from '../../lib/analytics/events';
import styles from './Buttons.module.css';

interface ButtonProps {
	label: string;
}

export const SymplaButton = ({ label }: ButtonProps) => {
	const handleSymplaClick = () => {
		trackEvent(AnalyticsEvent.CLICK_SYMPLA, AnalyticsCategory.COMPRA, label);
		window.open(
			'https://www.sympla.com.br/evento/espirito-ludico-gamenight-investigacao/3286120',
			'_blank',
		);
	};

	return (
		<button
			onClick={handleSymplaClick}
			className={`${styles.button} ${styles.symplaButton}`}
		>
			Comprar via Sympla
		</button>
	);
};

interface WhatsappButtonProps extends ButtonProps {
	ticketType?: string;
}

export const WhatsappButton = ({ ticketType, label }: WhatsappButtonProps) => {
	const handleWhatsAppClick = () => {
		trackEvent(AnalyticsEvent.CLICK_WHATSAPP, AnalyticsCategory.COMPRA, label);
		const message = encodeURIComponent(
			`Olá! Gostaria de comprar ingressos ${ticketType ? `do tipo ${ticketType}` : ''} para o Espírito Lúdico Game Night - Investigação pelo Pix.`,
		);
		window.open(`https://wa.me/5527995240773?text=${message}`, '_blank');
	};

	return (
		<button
			onClick={handleWhatsAppClick}
			className={`${styles.button} ${styles.whatsappButton}`}
		>
			Comprar via PIX (Sem taxa)
		</button>
	);
};
