"use client";

import Image from "next/image";
import styles from "./Categorias.module.css";

export default function Categorias() {
  const categories = [
    {
      id: 1,
      title: "Iniciantes",
      price: "R$ 10,00 - R$ 20,00",
      description: "Jogos perfeitos para quem está começando no mundo dos board games",
      image: "/categoria-1.jpg",
      games: ["Uno", "War", "Banco Imobiliário", "Detetive"],
      color: "#e6397d"
    },
    {
      id: 2,
      title: "Família",
      price: "R$ 20,00 - R$ 30,00",
      description: "Jogos ideais para reunir toda a família em momentos divertidos",
      image: "/categoria-2.jpg",
      games: ["Catan", "Ticket to Ride", "Carcassonne", "Pandemic"],
      color: "#005f99"
    },
    {
      id: 3,
      title: "Estratégia",
      price: "R$ 30,00 - R$ 40,00",
      description: "Desafie sua mente com jogos que exigem raciocínio e planejamento",
      image: "/categoria-3.jpg",
      games: ["Chess", "Go", "Scythe", "Terraforming Mars"],
      color: "#e6397d"
    },
    {
      id: 4,
      title: "Party Games",
      price: "R$ 25,00 - R$ 35,00",
      description: "Jogos animados para festas e encontros com muitos amigos",
      image: "/categoria-4.jpg",
      games: ["Codenames", "Cards Against Humanity", "Jackbox", "Werewolf"],
      color: "#005f99"
    },
    {
      id: 5,
      title: "Experientes",
      price: "R$ 40,00 - R$ 55,00",
      description: "Jogos complexos para jogadores experientes que buscam novos desafios",
      image: "/categoria-5.jpg",
      games: ["Gloomhaven", "Twilight Imperium", "Root", "Arkham Horror"],
      color: "#e6397d"
    }
  ];

  const openWhatsApp = (message: string = "Olá! Gostaria de saber mais sobre os jogos disponíveis para aluguel.") => {
    const phoneNumber = "5527999999999"; // Substituir com número real
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const openRentSite = () => {
    window.open("https://exemplo.com/aluguel", "_blank");
  };

  return (
    <section id="categorias" className={styles.categorias}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>QUAL JOGO ALUGAR?</h2>
          <p className={styles.subtitle}>
            Separamos nossos jogos em categorias por faixas de preço. 
            Abaixo você pode ver alguns jogos de cada categoria ou clicar no botão 
            para ver todos os jogos disponíveis para aluguel e seus preços.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={styles.categoryCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className={styles.categoryImage}
                />
                <div className={styles.priceTag}>
                  <span>{category.price}</span>
                </div>
              </div>
              
              <div className={styles.categoryContent}>
                <h3 
                  className={styles.categoryTitle}
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
                
                <div className={styles.gamesList}>
                  <h4>Exemplos de jogos:</h4>
                  <div className={styles.games}>
                    {category.games.map((game, gameIndex) => (
                      <span key={gameIndex} className={styles.gameTag}>
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.categoryActions}>
                  <button 
                    onClick={() => openWhatsApp(`Olá! Tenho interesse em jogos da categoria ${category.title}`)}
                    className={styles.whatsappButton}
                  >
                    <Image
                      src="/Pino_branco.png"
                      alt="WhatsApp"
                      width={16}
                      height={16}
                    />
                    Saber mais
                  </button>
                  <button 
                    onClick={openRentSite}
                    className={styles.rentButton}
                  >
                    Ver todos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.expertHelp}>
          <div className={styles.expertContent}>
            <div className={styles.expertIcon}>
              <Image
                src="/Pino_azul.png"
                alt="Especialista"
                width={60}
                height={60}
              />
            </div>
            <div className={styles.expertText}>
              <h3>Não sabe qual escolher?</h3>
              <p>
                Estamos sempre prontos para te indicar jogos de tabuleiro que irão fazer 
                suas noites de jogos inesquecíveis. Nos chame no WhatsApp e nos conte um 
                pouco sobre sua experiência com jogos e quantas pessoas jogarão.
              </p>
              <p className={styles.highlight}>
                A medida que você alugar, nossas sugestões vão melhorando, 
                baseadas no seu histórico.
              </p>
              <button 
                onClick={() => openWhatsApp("Olá! Preciso de ajuda para escolher um jogo. Sou iniciante e jogaremos com [número] pessoas.")}
                className={styles.expertButton}
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🎯</span>
            <h4>Indicações Personalizadas</h4>
            <p>Recomendamos jogos baseados no seu perfil e histórico</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>📚</span>
            <h4>Regras Explicadas</h4>
            <p>Ajuda para entender as regras de qualquer jogo</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🔄</span>
            <h4>Troca Facilitada</h4>
            <p>Não gostou? Podemos trocar por outro jogo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
