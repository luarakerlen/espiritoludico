import { AnalyticsCategory } from './categories';
import { AnalyticsEvent } from './events';

export function trackEvent(
	event: AnalyticsEvent,
	category: AnalyticsCategory,
	label?: string,
) {
	if (typeof window === 'undefined') return;
	if (!window.gtag) return;

	window.gtag('event', event, {
		event_category: category,
		event_label: label,
	});
}
