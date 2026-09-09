<div align="center">

# 🎬 FLIXIO

### Clone da Interface Netflix com Inteligência Artificial

[![Deploy no Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://project-netflix-com-ia.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-diegovieiradv-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diegovieiradv/project-netflix-com-ia)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

**FLIXIO** é uma réplica fiel da interface do Netflix, construída do zero com HTML5, CSS3 e JavaScript puro — sem frameworks, sem npm, sem ferramentas de build.

</div>

## 🔗 Links

| Link | Descrição |
|------|-----------|
| 🚀 [Deploy](https://project-netflix-com-ia.vercel.app) | Aplicação em produção |
| 📦 [Repositório](https://github.com/diegovieiradv/project-netflix-com-ia) | Código fonte no GitHub |
| 👨‍💻 [Autor](https://github.com/diegovieiradv) | Diego Vieira |

---

## 📋 Funcionalidades

| # | Funcionalidade | Descrição |
|---|----------------|-----------|
| 1 | 🎭 Seleção de Perfis | Tela de seleção com avatares ilustrativos |
| 2 | ✏️ Gerenciar Perfis | Adicionar, editar e remover perfis (máx. 8) |
| 3 | 🎥 Catálogo de Filmes | Catálogo estilo Netflix com dados em memória |
| 4 | 🎬 Hero Banner | Banner principal com vídeo do YouTube |
| 5 | 🎠 Carrosséis | Carrosséis de filmes por categoria |
| 6 | 🔍 Busca em Tempo Real | Barra de pesquisa com resultados instantâneos |
| 7 | 🧭 Filtros da Navbar | Início, Séries, Filmes, Novidades, Minha Lista |
| 8 | ❤️ Minha Lista | Favoritos persistentes por perfil |
| 9 | ▶️ Player de Vídeo | Modal com player do YouTube |
| 10 | 📄 Modal de Detalhes | Informações completas do filme |
| 11 | 💀 Loading Skeletons | Estados de carregamento animados |
| 12 | 🔔 Toast Notifications | Notificações toast para feedback |
| 13 | 🏷️ Tags e Scores | Tags, match score e duração dinâmicos |
| 14 | ⌨️ Navegação por Teclado | Setas nos carrosséis e navegação acessível |
| 15 | ⬆️ Scroll to Top | Botão para voltar ao topo |
| 16 | 📱 PWA com Service Worker | Cache offline e funcionamento sem internet |
| 17 | 🎨 Favicon e Manifest | Ícone SVG e manifest.json para PWA |
| 18 | 📊 Meta Tags SEO | Open Graph e meta tags para compartilhamento |
| 19 | 📐 Responsivo | Mobile-first com 7 breakpoints |
| 20 | ♿ Acessibilidade | aria-labels, roles, tabindex |

---

## 🛠️ Stack Tecnológica

<div align="center">

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica da aplicação |
| **CSS3** | Estilos, animações e responsividade |
| **JavaScript (ES Modules)** | Lógica, componentes e estado |
| **Service Worker** | Cache offline e suporte PWA |
| **localStorage** | Persistência de dados (perfis, favoritos) |
| **YouTube API** | Player de vídeo integrado |

**Zero dependências externas** — tudo construído com tecnologias nativas do navegador.

</div>

---

## 📁 Estrutura do Projeto

```
project-netflix-com-ia/
├── index.html              # 🏠 Entry point da SPA
├── app.js                  # 🚀 Módulo principal
├── styles.css              # 🎨 Estilos (~1800 linhas)
├── favicon.svg             # 🎨 Ícone SVG
├── manifest.json           # 📱 PWA manifest
├── sw.js                   # 🔧 Service Worker
├── LICENSE                 # 📄 Licença MIT
├── assets/                 # 🖼️ Imagens de perfil
│   ├── perfil-1.png
│   ├── perfil-2.png
│   ├── perfil-3.png
│   └── perfil-4.png
└── js/                     # 📦 Módulos JavaScript
    ├── state.js            # 🧠 Gerenciamento de estado
    ├── router.js           # 🧭 Hash router com transições
    ├── data.js             # 📊 Filmes, categorias e perfis
    ├── utils.js            # 🔧 Funções utilitárias
    └── components/         # 🧩 Componentes da UI
        ├── ProfileScreen.js    # Tela de seleção de perfis
        ├── ProfileModal.js     # Modal de criação/edição de perfil
        ├── CatalogScreen.js    # Tela principal do catálogo
        ├── ContentCard.js      # Card de filme/série
        ├── HeroBanner.js       # Banner principal
        └── Carousel.js         # Carrossel de conteúdo
```

---

## 🚀 Como Executar

### Pré-requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Um servidor local para servir os arquivos

### Opção 1: Servidor Local

```bash
# Clonar o repositório
git clone https://github.com/diegovieiradv/project-netflix-com-ia.git

# Entrar na pasta do projeto
cd project-netflix-com-ia

# Iniciar servidor local (Python)
python3 -m http.server 8080

# Abrir no navegador
# http://localhost:8080
```

### Opção 2: Node.js (live-server)

```bash
# Instalar live-server globalmente
npm install -g live-server

# Iniciar o servidor
live-server --port=8080
```

### Opção 3: Docker

```bash
# Criar Dockerfile (exemplo simples)
echo 'FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80' > Dockerfile

# Build e rodar
docker build -t flixio .
docker run -p 8080:80 flixio
```

---

## 📖 Como Usar

1. **🎭 Selecionar Perfil** — Ao abrir o app, selecione um perfil existente ou crie um novo
2. **🎬 Navegar no Catálogo** — Use os carrosséis ou a barra de busca para encontrar conteúdo
3. **❤️ Minha Lista** — Adicione filmes e séries à sua lista de favoritos
4. **▶️ Assistir** — Clique em um filme para ver detalhes e assista ao trailer
5. **⌨️ Navegação por Teclado** — Use as setas do teclado para navegar nos carrosséis

---

## 🧪 Arquitetura

### Componentes

O projeto segue uma arquitetura de **componentes baseada em funções**, onde cada componente é um módulo JavaScript que renderiza e gerencia sua parte da UI:

```javascript
// Exemplo de componente (ProfileScreen.js)
export function renderProfileScreen(container, { profiles, onSelect, onManage }) {
    // Renderiza a tela de seleção de perfis
    // Retorna funções de cleanup
}
```

### Estado

O estado é gerenciado via `state.js` utilizando `localStorage` para persistência:

- **Perfis** — Lista de perfis do usuário
- **Perfil Ativo** — Perfil selecionado atualmente
- **Minha Lista** — Filmes favoritos por perfil

### Roteamento

O `router.js` implementa um hash router simples com transições:

- `#/` — Seleção de perfis
- `#/home` — Catálogo principal
- `#/movie/:id` — Detalhes do filme

---

## 🤝 Como Contribuir

1. **Fork** o projeto
2. **Clone** seu fork
   ```bash
   git clone https://github.com/seu-usuario/project-netflix-com-ia.git
   ```
3. Crie uma **branch** para sua feature
   ```bash
   git checkout -b feature/nova-feature
   ```
4. **Commit** suas alterações
   ```bash
   git commit -m 'Adicionei nova feature'
   ```
5. **Push** para a branch
   ```bash
   git push origin feature/nova-feature
   ```
6. Abra um **Pull Request**

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - Copyright (c) 2026 Diego Vieira
```

---

## 👨‍💻 Autor

**Diego Vieira**

[![GitHub](https://img.shields.io/badge/GitHub-diegovieiradv-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diegovieiradv)
[![Deploy](https://img.shields.io/badge/Ver-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://project-netflix-com-ia.vercel.app)

---

<div align="center">

### ⭐ Se este projeto te ajudou, deixe uma estrela no GitHub! ⭐

Feito com ❤️ por **Diego Vieira**

</div>
