'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem('lgpd-accepted');
		if (!accepted) setShow(true);
	}, []);

	function acceptCookies() {
		localStorage.setItem('lgpd-accepted', 'true');
		setShow(false);
	}

	if (!show) return null;

	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				width: '100%',
				background: '#111',
				color: '#fff',
				padding: '16px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				zIndex: 9999,
			}}
		>
			<span>
				Este site utiliza cookies para melhorar sua experiência e analisar
				acessos.
			</span>

			<button
				onClick={acceptCookies}
				style={{
					background: '#fff',
					color: '#111',
					padding: '8px 12px',
					borderRadius: '4px',
					cursor: 'pointer',
					border: 'none',
				}}
			>
				Aceitar
			</button>
		</div>
	);
}
