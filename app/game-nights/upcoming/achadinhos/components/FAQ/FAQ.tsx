'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
	question: string;
	answer: string;
}

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const faqItems: FAQItem[] = [
		{
			question: 'O que são os "achadinhos"?',
			answer:
				'Os achadinhos são jogos de tabuleiro menos conhecidos, mas de alta qualidade e diversão. Selecionamos cuidadosamente jogos que são verdadeiras joias escondidas no mundo dos jogos de mesa.',
		},
		{
			question: 'Como funciona o sistema de estrelinhas?',
			answer:
				'Para cada achadinho que você jogar, você ganha uma estrelinha! As estrelinhas podem ser trocadas por brindes exclusivos. É nossa forma de recompensar sua curiosidade e incentivar a descoberta de novos jogos.',
		},
		{
			question: 'Preciso ter experiência com jogos de tabuleiro?',
			answer:
				'Não! O evento é acessível a todos, desde iniciantes até veteranos. Teremos monitores disponíveis para explicar as regras e ajudar você a começar a jogar.',
		},
		{
			question: 'Posso jogar apenas os achadinhos ou todo o acervo?',
			answer:
				'Você pode jogar tanto os achadinhos selecionados quanto todo o nosso acervo de jogos. Os achadinhos são uma seleção especial que rendem estrelinhas, mas você tem liberdade total para escolher o que quiser jogar.',
		},
		{
			question: 'Posso ir sozinho(a)?',
			answer:
				'Com certeza! Muitos participantes vêm sozinhos e acabam fazendo novos amigos durante o evento. É uma ótima oportunidade para socializar e conhecer pessoas com interesses similares.',
		},
		{
			question: 'Quais brindes posso ganhar com as estrelinhas?',
			answer:
				'Teremos uma variedade de brindes exclusivos, incluindo itens temáticos, descontos em locações futuras e surpresas especiais. Quanto mais estrelinhas você acumular, melhores serão os brindes disponíveis para troca.',
		},
		{
			question: 'O evento é adequado para menores de idade?',
			answer:
				'Sim, o evento é adequado para todas as idades! No entanto, menores de 16 anos devem estar acompanhados de um responsável.',
		},
		{
			question: 'Preciso levar algo para o evento?',
			answer:
				'Apenas sua curiosidade e vontade de se divertir! Todo o material necessário para os jogos será fornecido por nós.',
		},
	];

	const toggleQuestion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className={styles.faq} id='faq'>
			<div className={styles.container}>
				<h2 className={styles.title}>Dúvidas Frequentes</h2>
				<p className={styles.subtitle}>
					Tire suas dúvidas sobre o Achadinhos da Espírito Lúdico
				</p>

				<div className={styles.faqList}>
					{faqItems.map((item, index) => (
						<div
							key={index}
							className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
						>
							<button
								className={styles.question}
								onClick={() => toggleQuestion(index)}
								aria-expanded={activeIndex === index}
								aria-controls={`answer-${index}`}
							>
								<span className={styles.questionText}>{item.question}</span>
								<span className={styles.icon} aria-hidden='true'>
									{activeIndex === index ? '−' : '+'}
								</span>
							</button>

							<div
								id={`answer-${index}`}
								className={styles.answer}
								role='region'
								style={{
									maxHeight: activeIndex === index ? 'none' : '0',
									opacity: activeIndex === index ? 1 : 0,
								}}
							>
								<p>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
