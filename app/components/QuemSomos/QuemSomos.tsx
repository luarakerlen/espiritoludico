"use client";

import { phoneNumber } from "../../helpers/consts";
import Image from "next/image";
import styles from "./QuemSomos.module.css";

export default function QuemSomos() {
  const openWhatsApp = (message: string = "Olá! Gostaria de conhecer mais sobre a Espírito Lúdico.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const values = [
    {
      icon: "🎯",
      title: "Missão",
      description: "Despertar o espírito lúdico nas pessoas, promovendo conexões autênticas e momentos inesquecíveis através dos jogos de tabuleiro."
    },
    {
      icon: "👁️",
      title: "Visão",
      description: "Ser a referência em aluguel de jogos de tabuleiro no Espírito Santo, levando diversão e conexão para cada lar."
    },
    {
      icon: "❤️",
      title: "Valores",
      description: "Valorizamos a criação de memórias felizes, incentivando o retorno às experiências offline, onde diversão, estratégia e convivência se encontram."
    }
  ];

  return (
    <section id="quem-somos" className={styles.quemSomos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>QUEM SOMOS?</h2>
          <p className={styles.subtitle}>
            Conheça a história por trás da Espírito Lúdico e nossa paixão por jogos de tabuleiro
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.imageContainer}>
              <Image
                src="/quem-somos.avif"
                alt="Fundadora da Espírito Lúdico"
                fill
                className={styles.mainImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.founderBadge}>
                  <Image
                    src="/logos/Pino_branco.png"
                    alt="Espírito Lúdico"
                    width={30}
                    height={30}
                  />
                  <span>Luara Kerlen - Fundadora</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>
                Uma paixão capixaba por jogos de tabuleiro
              </h3>
              
              <div className={styles.storyText}>
                <p>
                  A <strong>Espírito Lúdico</strong> é uma empresa do Espírito Santo, 
                  fundada por <strong>Luara Kerlen</strong>, boardgamer apaixonada pelo hobby 
                  e disposta a levar a diversão a muitas outras pessoas! A empresa proporciona 
                  tudo que é necessário para você viver a experiência dos jogos de tabuleiro 
                  em <strong>Cariacica, Espírito Santo</strong>.
                </p>
                
                <p>
                  Embora nossa jornada empresarial possa ser recente, nossa <strong>paixão 
                  pelos jogos modernos de tabuleiro é antiga</strong>! Nosso acervo conta com 
                  jogos do mundo inteiro - agora disponíveis para toda a comunidade de 
                  Cariacica e região.
                </p>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>Jogos Disponíveis</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Clientes Felizes</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>Horas de Diversão</span>
                </div>
              </div>

              <button 
                onClick={() => openWhatsApp()}
                className={styles.ctaButton}
              >
                <Image
                  src="/logos/Pino_branco.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                Conheça nossa história
              </button>
            </div>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Nossos Pilares</h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div 
                key={index}
                className={styles.valueCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.differential}>
          <div className={styles.differentialContent}>
            <div className={styles.differentialText}>
              <h3>Por que escolher a Espírito Lúdico?</h3>
              <ul>
                <li>✨ Empresa 100% capixaba, entendendo as necessidades da nossa comunidade</li>
                <li>🎲 Curadoria especializada com os melhores jogos do mercado</li>
                <li>💬 Atendimento personalizado com especialistas em jogos</li>
                <li>🚀 Entrega rápida em Cariacica e região</li>
                <li>🌟 Flexibilidade de planos para todos os perfis de jogadores</li>
              </ul>
              <button 
                onClick={() => openWhatsApp("Olá! Quero se tornar um cliente da Espírito Lúdico")}
                className={styles.differentialButton}
              >
                Junte-se a nós
              </button>
            </div>
            <div className={styles.differentialImage}>
              <Image
                src="/logos/Fundo_azul_aluguel.png"
                alt="Espírito Lúdico - Jogos de Tabuleiro"
                fill
                className={styles.differentialImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
