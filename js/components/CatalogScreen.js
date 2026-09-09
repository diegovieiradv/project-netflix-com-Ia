import { State, Toast } from '../state.js';
import { categories, allMovies } from '../data.js';
import { navigateTo } from '../router.js';
import { createHeroBanner } from './HeroBanner.js';
import { createCarousel } from './Carousel.js';

export function renderCatalogScreen(container) {
    const profile = State.getCurrentProfile();
    if (!profile) {
        navigateTo('#profiles');
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'main-content';

    // ===== NAVBAR =====
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    // Logo
    const navbarHeader = document.createElement('header');
    navbarHeader.className = 'navbar-header';

    const logo = document.createElement('img');
    logo.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='50' y='70' font-size='60' fill='%23E50914' font-weight='bold' font-family='Arial'%3EFLIXIO%3C/text%3E%3C/svg%3E";
    logo.alt = 'FLIXIO';
    logo.className = 'navbar-logo';
    navbarHeader.appendChild(logo);
    navbar.appendChild(navbarHeader);

    // Nav links
    const navMenu = document.createElement('ul');
    navMenu.className = 'navbar-menu';

    const linkFilters = [
        { text: 'Início', filter: 'all' },
        { text: 'Séries', filter: 'series' },
        { text: 'Filmes', filter: 'movies' },
        { text: 'Novidades', filter: 'new' },
        { text: 'Minha Lista', filter: 'favorites' }
    ];

    let currentFilter = 'all';

    linkFilters.forEach((linkData, idx) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-link' + (idx === 0 ? ' active' : '');
        a.textContent = linkData.text;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = linkData.filter;
            // Update active state
            navMenu.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            a.classList.add('active');
            // Re-render content
            renderContent();
        });
        li.appendChild(a);
        navMenu.appendChild(li);
    });

    navbar.appendChild(navMenu);

    // Search input
    const searchContainer = document.createElement('div');
    searchContainer.style.flex = '1';
    searchContainer.style.maxWidth = '300px';

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.className = 'nav-search';
    searchInput.placeholder = 'Buscar...';
    searchInput.setAttribute('aria-label', 'Buscar filmes e séries');
    searchContainer.appendChild(searchInput);
    navbar.appendChild(searchContainer);

    // Right side
    const navbarRight = document.createElement('div');
    navbarRight.className = 'navbar-right';

    const profileBtn = document.createElement('button');
    profileBtn.className = 'profile-btn';
    profileBtn.textContent = 'Trocar Perfil';
    profileBtn.addEventListener('click', () => {
        navigateTo('#profiles');
    });
    navbarRight.appendChild(profileBtn);

    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.textContent = 'Sair';
    logoutBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja sair?')) {
            State.setCurrentProfile(null);
            navigateTo('#profiles');
        }
    });
    navbarRight.appendChild(logoutBtn);

    navbar.appendChild(navbarRight);
    wrapper.appendChild(navbar);

    // ===== CONTENT AREA (dynamically rendered) =====
    const contentArea = document.createElement('div');
    contentArea.id = 'catalog-content';
    wrapper.appendChild(contentArea);

    // ===== FOOTER =====
    const footer = document.createElement('footer');

    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    const copyright = document.createElement('p');
    copyright.textContent = '© ' + new Date().getFullYear() + ' FLIXIO. Todos os direitos reservados.';
    footerContent.appendChild(copyright);

    const footerLinks = document.createElement('ul');
    footerLinks.className = 'footer-links';

    const footerLinkTexts = ['Privacidade', 'Termos de Serviço', 'Contato', 'Centro de Ajuda'];
    footerLinkTexts.forEach(text => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.addEventListener('click', (e) => e.preventDefault());
        li.appendChild(a);
        footerLinks.appendChild(li);
    });

    footerContent.appendChild(footerLinks);
    footer.appendChild(footerContent);
    wrapper.appendChild(footer);

    container.appendChild(wrapper);

    // ===== CONTENT RENDERING FUNCTION =====
    function renderContent() {
        // Clear content area
        while (contentArea.firstChild) {
            contentArea.removeChild(contentArea.firstChild);
        }

        const searchQuery = searchInput.value.trim().toLowerCase();

        // Filter logic
        let filteredCategories = categories;

        if (currentFilter === 'favorites') {
            const favTitles = State.getFavorites(profile.id);
            if (favTitles.length === 0) {
                // Show empty favorites
                const emptySection = document.createElement('section');
                emptySection.className = 'favorites-section';
                const emptyH2 = document.createElement('h2');
                emptyH2.textContent = 'Minha Lista';
                emptySection.appendChild(emptyH2);
                const emptyP = document.createElement('p');
                emptyP.className = 'favorites-empty';
                emptyP.textContent = 'Sua lista está vazia. Adicione filmes e séries clicando no botão "+".';
                emptySection.appendChild(emptyP);
                contentArea.appendChild(emptySection);
                return;
            }
            // Create favorites category
            const favItems = [];
            allMovies.forEach(movie => {
                if (favTitles.includes(movie.title)) {
                    favItems.push(movie);
                }
            });
            const favCategory = { title: 'Minha Lista', items: favItems };
            const carousel = createCarousel(favCategory);
            contentArea.appendChild(carousel);
            return;
        }

        if (currentFilter === 'series') {
            filteredCategories = categories.filter(cat =>
                cat.title === 'Séries' || cat.title === 'Para maratonar' ||
                cat.items.some(item => item.category === 'Séries')
            );
        } else if (currentFilter === 'movies') {
            filteredCategories = categories.filter(cat =>
                cat.title !== 'Séries' && cat.title !== 'Para maratonar' &&
                cat.items.some(item => item.category !== 'Séries')
            );
        } else if (currentFilter === 'new') {
            filteredCategories = categories.filter(cat =>
                cat.items.some(item => item.badge)
            );
        }

        // Search filter
        if (searchQuery) {
            filteredCategories = filteredCategories.map(cat => ({
                ...cat,
                items: cat.items.filter(item =>
                    (item.title && item.title.toLowerCase().includes(searchQuery)) ||
                    (item.category && item.category.toLowerCase().includes(searchQuery)) ||
                    (item.genres && item.genres.some(g => g.toLowerCase().includes(searchQuery)))
                )
            })).filter(cat => cat.items.length > 0);
        }

        // Show loading skeleton first
        const skeletonBanner = document.createElement('div');
        skeletonBanner.className = 'skeleton skeleton-banner';
        contentArea.appendChild(skeletonBanner);

        const skeletonSection = document.createElement('div');
        skeletonSection.className = 'sliders-container';
        skeletonSection.style.paddingTop = '0';
        for (let i = 0; i < 3; i++) {
            const skelRow = document.createElement('div');
            skelRow.className = 'slider-section';
            const skelHeader = document.createElement('div');
            skelHeader.className = 'slider-header';
            const skelTitle = document.createElement('div');
            skelTitle.className = 'skeleton skeleton-text';
            skelTitle.style.width = '150px';
            skelHeader.appendChild(skelTitle);
            skelRow.appendChild(skelHeader);
            const skelCards = document.createElement('div');
            skelCards.className = 'movie-row';
            for (let j = 0; j < 4; j++) {
                const skelCard = document.createElement('div');
                skelCard.className = 'skeleton skeleton-card';
                skelCards.appendChild(skelCard);
            }
            skelRow.appendChild(skelCards);
            skeletonSection.appendChild(skelRow);
        }
        contentArea.appendChild(skeletonSection);

        // Remove skeleton and render real content after brief delay
        setTimeout(() => {
            while (contentArea.firstChild) {
                contentArea.removeChild(contentArea.firstChild);
            }

            // Hero banner
            const heroMovie = allMovies[0] || null;
            const heroBanner = createHeroBanner(heroMovie);
            contentArea.appendChild(heroBanner);

            // Content sections
            const sections = document.createElement('main');
            sections.className = 'sliders-container';

            if (filteredCategories.length === 0 && searchQuery) {
                const noResults = document.createElement('div');
                noResults.style.textAlign = 'center';
                noResults.style.padding = '3rem';
                noResults.style.color = '#737373';
                noResults.textContent = 'Nenhum resultado encontrado para "' + searchQuery + '"';
                sections.appendChild(noResults);
            }

            filteredCategories.forEach(category => {
                const carousel = createCarousel(category);
                sections.appendChild(carousel);
            });

            contentArea.appendChild(sections);
        }, 500);
    }

    // Search input handler with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderContent();
        }, 300);
    });

    // Initial render
    renderContent();
}
