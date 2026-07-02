"use client";

import Image from "next/image";
import styles from "./Comunidade.module.css";
import { phoneNumber } from "../../helpers/consts";

export default function Comunidade() {
  const eventTypes = [
    {
      icon: "🎂",
      title: "Aniversários",
      description: "Deixe seu aniversário ainda mais especial com jogos divertidos para todas as idades.",
      features: ["Jogos adequados para a faixa etária", "Monitor especializado disponível", "Decorções temáticas"]
    },
    {
      icon: "🏢",
      title: "Confraternizações Empresariais",
      description: "Fortaleça o espírito de equipe com atividades que promovem colaboração e comunicação.",
      features: ["Jogos de team building", "Competições amistosas", "Medalhas personalizadas"]
    },
    {
      icon: "🏫",
      title: "Eventos Escolares",
      description: "Educação divertida com jogos que desenvolvem raciocínio lógico e habilidades sociais.",
      features: ["Jogos educativos", "Alinhamento com currículo", "Material didático incluído"]
    },
    {
      icon: "🌟",
      title: "Eventos Comunitários",
      description: "Leve diversão e conexão para sua comunidade com nossos jogos de tabuleiro.",
      features: ["Jogos para grandes grupos", "Acessibilidade", "Atividades inclusivas"]
    }
  ];

  const communityBenefits = [
    {
      icon: "💬",
      title: "Grupo Exclusivo WhatsApp",
      description: "Tire dúvidas, compartilhe experiências e receba dicas de outros jogadores."
    },
    {
      icon: "🎁",
      title: "Promoções exclusivas",
      description: "Receba promoções exclusivas para aluguéis e eventos da Espírito Lúdico."
    },
    {
      icon: "🎲",
      title: "Escolha de jogos",
      description: "Participe de votações para escolher novos jogos do nosso acervo."
    },
    {
      icon: "🎥",
      title: "Spoilers e novidades",
      description: "Receba spoilers e novidades em primeira mão sobre os jogos que serão disponibilizados para aluguéis."
    }
  ];

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const joinCommunity = () => {
    openWhatsApp("Olá! Gostaria de entrar para a comunidade da Espírito Lúdico.");
  };

  const requestEvent = (eventType: string) => {
    openWhatsApp(`Olá! Tenho interesse em contratar um evento de ${eventType}. Podem me passar mais informações?`);
  };

  return (
    <section id="comunidade" className={styles.comunidadeEventos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>COMUNIDADE</h2>
          <p className={styles.subtitle}>
            Faça parte da nossa comunidade, conecte-se com outros jogadores e aproveite os benefícios exclusivos.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.communitySection}>
            <div className={styles.communityHeader}>
              <div className={styles.communityIcon}>
                <Image
                  src="/Pino_branco.png"
                  alt="Comunidade"
                  width={30}
                  height={35}
                />
              </div>
              <div>
                <h3>Comunidade Espírito Lúdico</h3>
                <p>Junte-se a centenas de jogadores apaixonados</p>
              </div>
            </div>

            <div className={styles.communityBenefits}>
              {communityBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={styles.benefitCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.communityCta}>
              <button
                onClick={joinCommunity}
                className={styles.communityButton}
              >
                <Image
                  src="/Pino_branco.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                Entrar na Comunidade
              </button>
              <button>
                Seguir noInstagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
