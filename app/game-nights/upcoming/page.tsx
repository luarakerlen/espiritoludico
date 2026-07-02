import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Próximos Eventos - Espírito Lúdico',
	description:
		'Confira os próximos eventos e game nights da Espírito Lúdico.',
};

export default function UpcomingGameNightsPage() {
	return (
		<main
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1rem',
				padding: '2rem',
				textAlign: 'center',
			}}
		>
			<h1>Próximos Eventos</h1>
			<p>Em breve divulgaremos a próxima game night.</p>
			<a
				href='https://www.sympla.com.br/produtor/espiritoludico'
				target='_blank'
				rel='noopener noreferrer'
			>
				Ver eventos no Sympla
			</a>
		</main>
	);
}
