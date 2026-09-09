import { createContentCard } from './ContentCard.js';
import { registerKeyHandler, scrollRow } from '../router.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.textContent = category.title;

    const navDiv = document.createElement('div');
    navDiv.className = 'carousel-nav';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-nav-btn';
    prevBtn.setAttribute('aria-label', 'Anterior');
    prevBtn.textContent = '◀';

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-nav-btn';
    nextBtn.setAttribute('aria-label', 'Próximo');
    nextBtn.textContent = '▶';

    navDiv.appendChild(prevBtn);
    navDiv.appendChild(indicators);
    navDiv.appendChild(nextBtn);

    header.appendChild(title);
    header.appendChild(navDiv);
    section.appendChild(header);

    // Movie row
    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createContentCard(item);
        row.appendChild(card);
    });

    // Navigation button handlers
    prevBtn.addEventListener('click', () => {
        scrollRow(row, 'prev');
    });

    nextBtn.addEventListener('click', () => {
        scrollRow(row, 'next');
    });

    // Keyboard support
    registerKeyHandler((e) => {
        if (e.key === 'ArrowLeft') {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                scrollRow(row, 'prev');
            }
        } else if (e.key === 'ArrowRight') {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                scrollRow(row, 'next');
            }
        }
    });

    section.appendChild(row);
    return section;
}
