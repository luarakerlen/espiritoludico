'use client';

import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeOnPage } from '../../hooks/useTimeOnPage';
import { AnalyticsCategory } from '../../lib/analytics/categories';
import { AnalyticsLabel } from '../../lib/analytics/labels';

export default function AnalyticsTracker() {
	useScrollTracking(
		AnalyticsCategory.EVENTOS,
		AnalyticsLabel.GAMENIGHT_INVESTIGACAO,
	);

	useTimeOnPage(
		AnalyticsCategory.EVENTOS,
		AnalyticsLabel.GAMENIGHT_INVESTIGACAO,
	);

	return null;
}
