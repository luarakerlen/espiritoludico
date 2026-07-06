import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Espírito Lúdico - Aluguel de Jogos de Tabuleiro no Espírito Santo',
	description:
		'Aluguel de jogos de tabuleiro em Cariacica, ES. Desperte o espírito lúdico em você e crie conexões autênticas com quem você ama. Jogos clássicos e modernos para todas as idades.',
	keywords: [
		'jogos de tabuleiro',
		'aluguel de jogos',
		'jogos de tabuleiro aluguel',
		'jogos de tabuleiro aluguel cariacica',
		'jogos de tabuleiro aluguel espirito Santo',
		'aluguel de jogos de tabuleiro',
		'aluguel de jogos de tabuleiro cariacica',
		'aluguel de jogos de tabuleiro espirito Santo',
		'aluguel de jogos de tabuleiro cariacica espirito Santo',
		'jogos de tabuleiro modernos',
		'jogos de tabuleiro clássicos',
		'comprar jogos de tabuleiro espirito santo',
		'jogos de tabuleiro cariacica',
		'jogos de tabuleiro vitoria',
		'jogos de tabuleiro vila velha',
		'jogos de tabuleiro espirito santo',
	],
	authors: [{ name: 'Luara Kerlen dos Santos Rangel' }],
	metadataBase: new URL('https://espiritoludico.vercel.app/'),
	openGraph: {
		title: 'Espírito Lúdico - Aluguel de Jogos de Tabuleiro no Espírito Santo',
		description:
			'Aluguel de jogos de tabuleiro em Cariacica, ES. Desperte o espírito lúdico em você e crie conexões autênticas com quem você ama. Jogos clássicos e modernos para todas as idades.',
		type: 'website',
		locale: 'pt_BR',
		images: [
			{
				url: '/logos/Fundo_azul_aluguel.png',
				width: 1200,
				height: 630,
				alt: 'Espírito Lúdico',
			},
		],
		url: 'https://espiritoludico.vercel.app/',
		siteName: 'Espírito Lúdico',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Espírito Lúdico',
		description:
			'Aluguel de jogos de tabuleiro em Cariacica, ES. Desperte o espírito lúdico em você e crie conexões autênticas com quem você ama. Jogos clássicos e modernos para todas as idades.',
		images: ['/logos/Fundo_azul_aluguel.png'],
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
