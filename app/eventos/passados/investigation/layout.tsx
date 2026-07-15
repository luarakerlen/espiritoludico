import type { Metadata } from 'next';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
	title: 'Espírito Lúdico Game Night - Investigação',
	description:
		'Participe da Espírito Lúdico Game Night - Investigação! Uma noite de mistério, jogos de tabuleiro e muita diversão. Reúna sua equipe e venha desvendar este caso intrigante.',
	keywords: [
		'Espírito Lúdico',
		'Game Night',
		'Investigação',
		'Jogos de Tabuleiro',
		'Evento',
		'Mistério',
	],
	openGraph: {
		title: 'Espírito Lúdico Game Night - Investigação',
		description:
			'Uma noite de mistério e investigação. Reúna sua equipe e venha desvendar este caso! 7 de fevereiro, 18h30.',
		images: [
			{
				url: '/paginas-eventos/investicacao/arte-principal.png',
				width: 1200,
				height: 630,
				alt: 'Espírito Lúdico Game Night - Investigação',
			},
		],
		siteName: 'Espírito Lúdico',
		locale: 'pt_BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Espírito Lúdico Game Night - Investigação',
		description:
			'Uma noite de mistério e investigação. Reúna sua equipe e venha desvendar este caso!',
		images: ['/paginas-eventos/investicacao/arte-principal.png'],
	},
};

export default function InvestigationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<GoogleAnalytics />
			{children}
		</>
	);
}
