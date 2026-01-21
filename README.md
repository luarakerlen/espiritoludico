# Espírito Lúdico - Site de Aluguel de Jogos de Tabuleiro

Site moderno e responsivo para a Espírito Lúdico, empresa capixaba de aluguel de jogos de tabuleiro.

## 🎯 Sobre o Projeto

A Espírito Lúdico é uma empresa do Espírito Santo, fundada por Luara Kerlen, com o objetivo de tornar acessível os jogos de tabuleiro e proporcionar momentos de descontração e diversão entre as pessoas.

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com renderização no servidor
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **CSS Modules** - Estilização componentizada e isolada
- **React** - Biblioteca para construção de interfaces

## 🎨 Características do Site

### Design e UX
- **Cores da marca**: Branco (#FFFFFF), Rosa (#e6397d), Azul (#005f99)
- **Design moderno** com animações suaves
- **Totalmente responsivo** para todos os dispositivos
- **Navegação intuitiva** com scroll suave
- **Acessibilidade** com semântica HTML adequada

### Funcionalidades
- **Navegação fixa** com acesso rápido às seções
- **Integração com WhatsApp** para contato direto
- **Seções informativas** sobre serviços e benefícios
- **Galeria de categorias** de jogos com preços
- **Seção de eventos** para corporativos e sociais
- **Footer completo** com informações de contato

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── Header/           # Cabeçalho com navegação
│   ├── Hero/             # Seção principal
│   ├── ComoFunciona/     # 4 passos do aluguel
│   ├── PorQueAlugar/     # Benefícios do aluguel
│   ├── Categorias/       # Categorias de jogos
│   ├── Eventos/          # Eventos e encontros
│   ├── Comunidade/       # Comunidade de boardgamers
│   ├── QuemSomos/        # Sobre a empresa
│   └── Footer/           # Rodapé
├── globals.css           # Estilos globais
├── layout.tsx            # Layout principal
└── page.tsx              # Página inicial
```

## 🎮 Seções do Site

### 1. Hero
- Mensagem principal sobre aluguel de jogos
- Call-to-action para WhatsApp
- Benefícios visuais com animações

### 2. Como Funciona
- 4 passos simples do processo de aluguel
- Ícones animados e descrições claras
- Botões para contato e aluguel

### 3. Por Que Alugar
- Comparativo de preços (comprar vs alugar)
- Benefícios do aluguel
- Depoimentos de clientes

### 4. Categorias
- 5 categorias de jogos por faixa de preço
- Exemplos de jogos em cada categoria
- Botões para WhatsApp e site de aluguel

### 5. Quem Somos
- História da Espírito Lúdico
- Informações sobre a fundadora
- Missão, visão e valores
- Estatísticas da empresa

### 6. Comunidade e Eventos
- Benefícios da comunidade WhatsApp
- Tipos de eventos oferecidos
- Formulário de contato para eventos
- Depoimentos

### 7. Footer
- Informações completas de contato
- Links rápidos para seções
- Redes sociais
- Botão voltar ao topo

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
```

### Acesso
- Desenvolvimento: http://localhost:3000
- Produção: Configurar seu domínio

## 📱 Responsividade

O site foi desenvolvido com mobile-first approach e é totalmente responsivo:

- **Desktop**: Layout completo com todas as animações
- **Tablet**: Adaptado para telas médias
- **Mobile**: Navegação otimizada para toque

## 🎨 Personalização

### Cores
As cores da marca estão definidas em `globals.css`:
```css
--primary-rose: #e6397d;
--primary-blue: #005f99;
```

### Imagens
As imagens estão na pasta `public/`:
- Logotipos (Pino rosa, azul, branco, preto)
- Imagens das categorias
- Fotos institucionais

### WhatsApp
O número do WhatsApp está configurado como placeholder. 
Substitua `5527999999999` pelo número real em todos os componentes.

## 🚀 Deploy

O site está pronto para deploy em plataformas como:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Qualquer plataforma com suporte a Node.js

## 📈 Performance

O site foi otimizado para:
- **Core Web Vitals** com Next.js
- **Imagens otimizadas** com Next/Image
- **CSS crítico** inline
- **Lazy loading** de componentes
- **Minimal JavaScript** client-side

## 🔧 Manutenção

### Atualizar conteúdo
- Textos: Editar os componentes correspondentes
- Imagens: Substituir na pasta `public/`
- Preços: Atualizar no componente `Categorias.tsx`

### Adicionar novas seções
1. Criar pasta em `app/components/`
2. Desenvolver componente com CSS Modules
3. Importar em `page.tsx`

## 📞 Contato

Para dúvidas sobre o site:
- Desenvolvedor: [Seu contato]
- Espírito Lúdico: WhatsApp através do site

---

**Desenvolvido com ❤️ para a Espírito Lúdico**
