import { State } from '../state.js';
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

    const links = ['Início', 'Séries', 'Filmes', 'Novidades', 'Minha Lista'];
    links.forEach((text, idx) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-link' + (idx === 0 ? ' active' : '');
        a.textContent = text;
        a.addEventListener('click', (e) => e.preventDefault());
        li.appendChild(a);
        navMenu.appendChild(li);
    });

    navbar.appendChild(navMenu);

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

    // ===== HERO BANNER =====
    const heroMovie = allMovies[0] || null;
    const heroBanner = createHeroBanner(heroMovie);
    wrapper.appendChild(heroBanner);

    // ===== CONTENT SECTIONS =====
    const sections = document.createElement('main');
    sections.className = 'sliders-container';

    categories.forEach(category => {
        const carousel = createCarousel(category);
        sections.appendChild(carousel);
    });

    wrapper.appendChild(sections);

    // ===== FOOTER =====
    const footer = document.createElement('footer');

    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    const copyright = document.createElement('p');
    copyright.textContent = '© 2024 FLIXIO. Todos os direitos reservados.';
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
}
