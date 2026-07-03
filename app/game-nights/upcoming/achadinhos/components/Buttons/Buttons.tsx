'use client';

const SymplaButton = ({ label }: { label?: string }) => {
	return (
		<a
			href='https://www.sympla.com.br/produtor/espiritoludico'
			target='_blank'
			rel='noopener noreferrer'
			className='sympla-button'
			style={{
				display: 'inline-block',
				background: '#FF6B35',
				color: '#fff',
				padding: '12px 32px',
				borderRadius: '8px',
				fontWeight: '600',
				textDecoration: 'none',
				transition: 'all 0.3s ease',
				border: 'none',
				cursor: 'pointer',
				fontSize: '16px',
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.background = '#E55A2B';
				e.currentTarget.style.transform = 'translateY(-2px)';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.background = '#FF6B35';
				e.currentTarget.style.transform = 'translateY(0)';
			}}
		>
			Garantir Ingresso
		</a>
	);
};

const WhatsappButton = ({ label, ticketType }: { label?: string; ticketType?: string }) => {
	return (
		<a
			href='https://wa.me/5511999999999'
			target='_blank'
			rel='noopener noreferrer'
			className='whatsapp-button'
			style={{
				display: 'inline-block',
				background: '#25D366',
				color: '#fff',
				padding: '12px 32px',
				borderRadius: '8px',
				fontWeight: '600',
				textDecoration: 'none',
				transition: 'all 0.3s ease',
				border: 'none',
				cursor: 'pointer',
				fontSize: '16px',
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.background = '#20BA5A';
				e.currentTarget.style.transform = 'translateY(-2px)';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.background = '#25D366';
				e.currentTarget.style.transform = 'translateY(0)';
			}}
		>
			Dúvidas? WhatsApp
		</a>
	);
};

export { SymplaButton, WhatsappButton };
