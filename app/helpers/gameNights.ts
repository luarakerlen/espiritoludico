export type GameNightEvent = {
	slug: string;
	title: string;
	href: string;
};

export const pastGameNights: GameNightEvent[] = [
	{
		slug: 'investigation',
		title: 'Investigação',
		href: '/game-nights/past/investigation',
	},
];

export const upcomingGameNights: GameNightEvent[] = [
	{
		slug: 'achadinhos',
		title: 'Achadinhos',
		href: '/game-nights/upcoming/achadinhos',
	},
];
