'use client';
import { useEffect, useRef } from 'react';
import { trackEvent } from '../lib/analytics';
import { AnalyticsEvent } from '../lib/analytics/events';
import { AnalyticsCategory } from '../lib/analytics/categories';

export function useTimeOnPage(category: AnalyticsCategory, label: string) {
	const sent30 = useRef(false);
	const sent60 = useRef(false);

	useEffect(() => {
		const timeout30 = setTimeout(() => {
			if (!sent30.current) {
				sent30.current = true;
				trackEvent(AnalyticsEvent.TIME_30S, category, label);
			}
		}, 30000);

		const timeout60 = setTimeout(() => {
			if (!sent60.current) {
				sent60.current = true;
				trackEvent(AnalyticsEvent.TIME_60S, category, label);
			}
		}, 60000);

		return () => {
			clearTimeout(timeout30);
			clearTimeout(timeout60);
		};
	}, [category, label]);
}
