'use client';
import { useEffect, useRef } from 'react';
import { trackEvent } from '../lib/analytics';
import { AnalyticsEvent } from '../lib/analytics/events';
import { AnalyticsCategory } from '../lib/analytics/categories';

export function useScrollTracking(category: AnalyticsCategory, label: string) {
	const triggered = useRef(false);

	useEffect(() => {
		function onScroll() {
			if (triggered.current) return;

			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;

			if (docHeight <= 0) return;

			const scrollPercent = scrollTop / docHeight;

			if (scrollPercent >= 0.75) {
				triggered.current = true;

				trackEvent(AnalyticsEvent.SCROLL_75, category, label);
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [category, label]);
}
