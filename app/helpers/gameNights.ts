export type GameNightEvent = {
	slug: string;
	title: string;
	href: string;
};

export const pastGameNights: GameNightEvent[] = [
	{
		slug: 'investigation',
		title: 'Investigação',
		href: '/eventos/passados/investigation',
	},
];

export const upcomingGameNights: GameNightEvent[] = [
	{
		slug: 'achadinhos',
		title: 'Achadinhos',
		href: '/eventos/futuros/achadinhos',
	},
	{
		slug: 'halloween',
		title: 'Halloween',
		href: '/eventos/futuros/halloween',
	},
];
