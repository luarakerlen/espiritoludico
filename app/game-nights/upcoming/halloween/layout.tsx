import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Espírito Lúdico Game Night - Halloween',
	description:
		'Participe da Espírito Lúdico Game Night - Halloween! Uma noite de mistério, jogos de tabuleiro e muita diversão. Reúna sua equipe e venha desvendar este caso intrigante.',
	keywords: [
		'Espírito Lúdico',
		'Game Night',
		'Halloween',
		'Jogos de Tabuleiro',
		'Evento',
		'Mistério',
		'Investigação',
	],
	openGraph: {
		title: 'Espírito Lúdico Game Night - Halloween',
		description:
			'Uma noite de mistério e investigação. Reúna sua equipe e venha desvendar este caso! 31 de outubro de 2026.',
		images: [
			{
				url: '/paginas-eventos/investicacao/arte-principal.png',
				width: 1200,
				height: 630,
				alt: 'Espírito Lúdico Game Night - Halloween',
			},
		],
		siteName: 'Espírito Lúdico',
		locale: 'pt_BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Espírito Lúdico Game Night - Halloween',
		description:
			'Uma noite de mistério e investigação. Reúna sua equipe e venha desvendar este caso!',
		images: ['/paginas-eventos/investicacao/arte-principal.png'],
	},
};

export default function HalloweenLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
