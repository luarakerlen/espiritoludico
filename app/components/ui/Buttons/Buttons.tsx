import { trackEvent } from '../../../game-nights/past/investigation/lib/analytics';
import { AnalyticsCategory } from '../../../game-nights/past/investigation/lib/analytics/categories';
import { AnalyticsEvent } from '../../../game-nights/past/investigation/lib/analytics/events';
import styles from './Buttons.module.css';

const getButtonClasses = (variant?: string) => {
	const classes = [styles.button];

	if (variant === 'default') {
		classes.push(styles.default);
	}
	
	if (variant === 'investigation') {
		classes.push(styles.investigation, styles.investigationBg);
	}
	
	return classes.join(' ');
};

interface ButtonProps {
	label?: string;
	variant?: 'default' | 'investigation';
}

export const SymplaButton = ({
	label,
	variant = 'default',
}: ButtonProps) => {
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
			className={getButtonClasses(variant)}
		>
			Comprar via Sympla
		</button>
	);
};

interface WhatsappButtonProps extends ButtonProps {
	ticketType?: string;
}

export const WhatsappButton = ({ ticketType, label, variant = 'default' }: WhatsappButtonProps) => {
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
			className={`${styles.whatsappButton} ${getButtonClasses(variant)}`}
		>
			Comprar via PIX (sem taxa)
		</button>
	);
};
