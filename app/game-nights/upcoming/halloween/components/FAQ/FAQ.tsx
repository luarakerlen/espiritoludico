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
			question: 'Preciso ter alguma experiência para participar?',
			answer:
				'Não! Não é necessário ter experiência prévia com jogos de mistério. O jogo é projetado para ser acessível a todos, desde iniciantes até veteranos de jogos de mesa.',
		},
		{
			question:
				'Se eu não quiser participar do mistério, posso ir para jogar os outros jogos de tabuleiro?',
			answer:
				'Sim! Você pode participar apenas do mistério, apenas dos jogos de mesa, ou de ambos. Os ingressos de caçador e de equipe garantem acesso a todas as atividades do evento, enquanto o ingresso simples permite que você aproveite os jogos de tabuleiro. Sinta-se livre para curtir da maneira que preferir!',
		},
		{
			question: 'Posso ir sozinho(a)?',
			answer:
				'Com certeza! Muitos participantes vêm sozinhos e acabam fazendo novos amigos durante o evento. O mistério é uma ótima oportunidade para socializar. Caso queira, você será agrupado(a) com outros participantes para resolver o mistério juntos, mas se preferir, pode resolver o caso sozinho(a).',
		},
		{
			question: 'Qual é a duração do mistério?',
			answer:
				'O mistério principal tem duração de aproximadamente 2 horas, mas você pode levar o tempo que precisar enquanto o evento durar. Os jogos de mesa estarão disponíveis durante todo o evento para você jogar no seu ritmo.',
		},
		{
			question: 'Preciso levar algo para o evento?',
			answer:
				'Apenas sua coragem e vontade de se divertir! Todo o material necessário para o mistério e os jogos serão fornecidos por nós.',
		},
		{
			question: 'O evento é adequado para menores de idade?',
			answer:
				'Sim, o evento é adequado para todas as idades! No entanto, menores de 16 anos devem estar acompanhados de um responsável e terem sua autorização para jogar. O tema do mistério é sobrenatural, então o responsável deve avaliar se isso não causará gatilhos.',
		},
		{
			question: 'A partir de qual idade precisa de ingresso?',
			answer:
				'Crianças até 7 anos não precisam de ingresso. A partir de 8 anos, é necessário ingresso para participar do evento.',
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
					Tire suas dúvidas sobre o Espírito Lúdico Game Night - Halloween
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
