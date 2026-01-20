"use client";

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = (message: string = "Olá! Gostaria de saber mais sobre os jogos de tabuleiro.") => {
    const phoneNumber = "5527999999999"; // Substituir com número real
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/Pino_rosa.png"
            alt="Espírito Lúdico Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Espírito Lúdico</span>
        </div>

        <nav className={styles.nav}>
          <button 
            onClick={() => scrollToSection("como-funciona")}
            className={styles.navLink}
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection("por-que-alugar")}
            className={styles.navLink}
          >
            Por Que Alugar
          </button>
          <button 
            onClick={() => scrollToSection("categorias")}
            className={styles.navLink}
          >
            Jogos
          </button>
          <button 
            onClick={() => scrollToSection("quem-somos")}
            className={styles.navLink}
          >
            Quem Somos
          </button>
          <button 
            onClick={() => scrollToSection("eventos")}
            className={styles.navLink}
          >
            Eventos
          </button>
        </nav>

        <div className={styles.actions}>
          <button 
            onClick={() => openWhatsApp()}
            className={`${styles.button} ${styles.whatsappButton}`}
          >
            <Image
              src="/Pino_branco.png"
              alt="WhatsApp"
              width={20}
              height={20}
            />
            Fale Conosco
          </button>
          <button 
            onClick={() => window.open("https://exemplo.com/aluguel", "_blank")}
            className={`${styles.button} ${styles.rentButton}`}
          >
            Alugar Jogos
          </button>
        </div>

        <button className={styles.mobileMenuButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
